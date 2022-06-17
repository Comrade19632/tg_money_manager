from datetime import date

from django.db.models import (
    CASCADE,
    BooleanField,
    CharField,
    DateField,
    FloatField,
    ForeignKey,
    IntegerField,
)

from common.models import TimeStampedModel

from ..enums import EnumType


class Transaction(TimeStampedModel):
    amount = FloatField(default=0)
    user = ForeignKey("users.User", on_delete=CASCADE)
    category = ForeignKey(
        "accountant.Category", on_delete=CASCADE, null=True, blank=True
    )
    enum_type = IntegerField(choices=EnumType.choices, default=EnumType.OUTCOME)
    date = DateField(default=date.today)
    is_monthly = BooleanField(default=False)
    is_correction = BooleanField(default=False)
    title = CharField(max_length=128, null=True, blank=True)

    class Meta:
        ordering = ("-date", "-created")
