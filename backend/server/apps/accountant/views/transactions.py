from datetime import datetime, timedelta

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.viewsets import ModelViewSet

from apps.accountant.services import get_period_statistic

from ..models import Transaction
from ..serializers import TransactionSerializer


class TransactionsViewSet(ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get_queryset(self):
        queryset = super().get_queryset()

        if (start_date := self.request.query_params.get("start_date")) and (
            end_date := self.request.query_params.get("end_date")
        ):
            return queryset.filter(
                user=self.request.user,
                date__gte=start_date,
                date__lte=end_date,
            )

        return queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(
        methods=["GET"],
        detail=False,
        url_name="overview-budjet",
        url_path="overview-budjet",
    )
    def overview_budjet(self, request):
        if (start_date := self.request.query_params.get("start_date")) and (
            end_date := self.request.query_params.get("end_date")
        ):
            queryset = self.get_queryset()

            savings = 10000

            monthly_stats = get_period_statistic(
                queryset=queryset.filter(is_monthly=True)
            )

            period_monthly_income = monthly_stats["period_income"]
            period_monthly_outcome = monthly_stats["period_outcome"]
            period_monthly_balance = monthly_stats["period_balance"]

            daily_stats = get_period_statistic(
                queryset=queryset.filter(is_correction=False, is_monthly=False)
            )

            period_daily_income = daily_stats["period_income"]
            period_daily_outcome = daily_stats["period_outcome"]
            period_daily_balance = daily_stats["period_balance"]

            start_date_obj = datetime.strptime(start_date, "%Y-%m-%d")
            end_date_obj = datetime.strptime(end_date, "%Y-%m-%d")

            dates_len = (end_date_obj - start_date_obj).days + 1

            dates = [start_date_obj + timedelta(days=x) for x in range(dates_len)]

            dates_data = []

            for date in dates:
                day_stats = get_period_statistic(
                    queryset=queryset.filter(
                        is_monthly=False,
                        is_correction=False,
                        date__day=date.day,
                    )
                )

                day_income = day_stats["period_income"]
                day_outcome = day_stats["period_outcome"]
                day_balance = day_stats["period_balance"]

                period_daily_balance_before_date = get_period_statistic(
                    queryset=queryset.filter(
                        date__lt=date, is_monthly=False, is_correction=False
                    )
                )["period_balance"]

                day_estimated_balance = (
                    period_monthly_balance + period_daily_balance_before_date - savings
                ) / (dates_len - date.day + 1)

                day_remaining_money = day_estimated_balance + day_balance

                dates_data.append(
                    {
                        "day_income": day_income,
                        "day_outcome": day_outcome,
                        "day_balance": day_balance,
                        "day_estimated_balance": day_estimated_balance,
                        "day_diff": day_remaining_money,
                        "date": date,
                    }
                )

            data = {
                "period_monthly_income": period_monthly_income,
                "period_monthly_outcome": period_monthly_outcome,
                "period_monthly_balance": period_monthly_balance,
                "period_daily_income": period_daily_income,
                "period_daily_outcome": period_daily_outcome,
                "period_daily_balance": period_daily_balance,
                "period_income": period_monthly_income
                + period_daily_income,  # важность под вопросом
                "period_outcome": period_monthly_outcome
                + period_daily_outcome,  # важность под вопросом
                "period_balance": period_monthly_balance
                + period_daily_balance,  # важность под вопросом
                "savings": savings,
                "period_remaining_money": period_monthly_balance
                + period_daily_balance
                - savings,
                "dates": dates_data,
            }

            return Response(status=HTTP_200_OK, data=data)

    @action(
        methods=["GET"],
        detail=False,
        url_name="overview-period-statistic",
        url_path="overview-period-statistic",
    )
    def overview_period_statistic(self, request):
        if self.request.query_params.get(
            "start_date"
        ) and self.request.query_params.get("end_date"):
            queryset = self.get_queryset()

            period_income, period_outcome, period_balance = get_period_statistic(
                queryset=queryset.filter(is_correction=False)
            ).values()

            total_queryset = Transaction.objects.filter(user=self.request.user)

            total_balance = get_period_statistic(queryset=total_queryset)[
                "period_balance"
            ]

            balance_period_ago = total_balance - period_balance

            if not balance_period_ago and not period_balance:
                percentage = 0.0
            elif not balance_period_ago:
                percentage = 100.0
            else:
                percentage = period_balance / balance_period_ago * 100

            data = {
                "period_income": period_income,
                "period_outcome": period_outcome,
                "period_balance": period_balance,
                "total_balance": total_balance,
                "percentage": round(percentage, 1),
            }

            return Response(status=HTTP_200_OK, data=data)
        else:
            queryset = self.get_queryset()

            period_income, period_outcome, period_balance = get_period_statistic(
                queryset=queryset.filter(is_correction=False)
            ).values()

            data = {
                "period_income": period_income,
                "period_outcome": period_outcome,
                "period_balance": None,
                "total_balance": period_balance,
                "percentage": None,
            }

            return Response(status=HTTP_200_OK, data=data)
