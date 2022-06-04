from django.db.models import Sum

from ..enums import EnumType


def get_period_statistic(queryset):

    period_income = (
        list(
            queryset.filter(enum_type=EnumType.INCOME).aggregate(Sum("amount")).values()
        )[0]
        or 0
    )

    period_outcome = (
        list(
            queryset.filter(enum_type=EnumType.OUTCOME)
            .aggregate(Sum("amount"))
            .values()
        )[0]
        or 0
    )

    period_balance = period_income - period_outcome

    return {
        "period_income": period_income,
        "period_outcome": period_outcome,
        "period_balance": period_balance,
    }
