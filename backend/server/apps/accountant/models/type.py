from django.db.models import IntegerChoices


class Type(IntegerChoices):
    INCOME = 1, "income"
    OUTCOME = 2, "outcome"
