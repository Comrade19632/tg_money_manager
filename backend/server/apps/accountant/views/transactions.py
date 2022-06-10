import calendar
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
    filter_fields = [
        "category__id",
        "enum_type",
        "date",
        "is_monthly",
        "is_correction",
        "title",
    ]

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
        today = datetime.today()

        start_date_obj = today.replace(day=1)
        end_date_obj = today.replace(
            day=calendar.monthrange(today.year, today.month)[1]
        )

        queryset = self.get_queryset().filter(
            date__gte=start_date_obj, date__lte=end_date_obj
        )

        savings = request.user.savings or 0

        monthly_stats = get_period_statistic(queryset=queryset.filter(is_monthly=True))

        period_monthly_balance = monthly_stats["period_balance"]

        if not period_monthly_balance:
            return Response(
                status=HTTP_200_OK,
                data={
                    "error": "Чтобы рассчитать бюджет вы должны добавить месячные доходы/расходы, также их сумма не должна равняться нулю"
                },
            )

        daily_stats = get_period_statistic(
            queryset=queryset.filter(is_correction=False, is_monthly=False)
        )

        period_daily_balance = daily_stats["period_balance"]

        dates_len = (end_date_obj - start_date_obj).days + 1

        day_stats = get_period_statistic(
            queryset=queryset.filter(
                is_monthly=False,
                is_correction=False,
                date__day=today.day,
            )
        )

        day_balance = day_stats["period_balance"]

        period_daily_balance_before_date = get_period_statistic(
            queryset=queryset.filter(
                date__lt=today, is_monthly=False, is_correction=False
            )
        )["period_balance"]

        day_estimated_balance = (
            period_monthly_balance + period_daily_balance_before_date - savings
        ) / (dates_len - today.day + 1)

        day_remaining_money = day_estimated_balance + day_balance

        data = {
            "day_estimated_balance": round(day_estimated_balance, 1),
            "day_remaining_money": round(day_remaining_money, 1),
            "date": today.strftime("%Y-%m-%d"),
            "period_remaining_money": round(
                period_monthly_balance + period_daily_balance - savings, 1
            ),
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
                queryset=queryset
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
                "period_income": round(period_income, 1),
                "period_outcome": round(period_outcome, 1),
                "period_balance": round(period_balance, 1),
                "total_balance": round(total_balance, 1),
                "percentage": round(percentage, 1),
            }

            return Response(status=HTTP_200_OK, data=data)
        else:
            queryset = self.get_queryset()

            period_income, period_outcome, period_balance = get_period_statistic(
                queryset=queryset
            ).values()

            data = {
                "period_income": round(period_income, 1),
                "period_outcome": round(period_outcome, 1),
                "total_balance": round(period_balance, 1),
            }

            return Response(status=HTTP_200_OK, data=data)
