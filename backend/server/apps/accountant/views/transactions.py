from django.db.models import Sum

from regex import B
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.viewsets import ModelViewSet

from apps.accountant.services import get_period_statistic

from ..enums import EnumType
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
                queryset=queryset
            ).values()

            data = {
                "period_income": period_income,
                "period_outcome": period_outcome,
                "period_balance": None,
                "total_balance": period_balance,
                "percentage": None,
            }

            return Response(status=HTTP_200_OK, data=data)
