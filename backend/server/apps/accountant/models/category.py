from django.db.models import CASCADE, CharField, ForeignKey, IntegerField, UniqueConstraint

from common.models import ActiveModel, TimeStampedModel

from ..enums import EnumType


class Category(ActiveModel, TimeStampedModel):
    title = CharField(max_length=128, default="Без названия")
    user = ForeignKey("users.User", on_delete=CASCADE)
    enum_type = IntegerField(choices=EnumType.choices, default=EnumType.OUTCOME)

    class Meta:
        constraints = [
            UniqueConstraint(fields=["title", "user", "enum_type"], name="unique_title")
        ]
