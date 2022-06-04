from django.db.models import IntegerChoices


class EnumType(IntegerChoices):
    INCOME = 1, "income"
    OUTCOME = 2, "outcome"
