from django.db.models import CASCADE, CharField, ForeignKey, IntegerField

from common.models import ActiveModel, TimeStampedModel

from .type import Type


class Category(ActiveModel, TimeStampedModel):
    title = CharField(max_length=128, default="Без названия")
    user = ForeignKey("users.User", on_delete=CASCADE)
    type = IntegerField(choices=Type.choices, default=Type.OUTCOME)

    def __str__(self):
        return self.title
