from django.db.models import CASCADE, BooleanField, DateField, ForeignKey, IntegerField
from django.utils.timezone import now

from common.models import TimeStampedModel

from ..enums import Type


class Transaction(TimeStampedModel):
    amount = IntegerField(default=0)
    user = ForeignKey("users.User", on_delete=CASCADE)
    category = ForeignKey("accountant.Category", on_delete=CASCADE)
    type = IntegerField(choices=Type.choices, default=Type.OUTCOME)
    date = DateField(default=now)
    is_monthly = BooleanField(default=False)
    is_correction = BooleanField(default=False)

    def __str__(self):
        return f"{self.category.title} {self.amount}" if self.category else self.amount
