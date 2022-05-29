from common.models import TimeStampedModel
from django.db.models import IntegerField, IntegerChoices, ForeignKey, CASCADE


class Transaction(TimeStampedModel):

    class Type(IntegerChoices):
        INCOME = 1, "income"
        OUTCOME = 2, "outcome"

    amount = IntegerField(default=0)
    user = ForeignKey("users.User", on_delete=CASCADE)
    category = ForeignKey("accountant.Category", on_delete=CASCADE)


    def __str__(self):
        return f"{self.category.title} {self.amount}" if self.category else self.amount
