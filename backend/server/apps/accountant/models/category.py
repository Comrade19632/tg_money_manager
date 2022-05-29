from common.models import TimeStampedModel, ActiveModel
from django.db.models import IntegerChoices, ForeignKey, CASCADE, CharField


class Category(ActiveModel, TimeStampedModel):

    class Type(IntegerChoices):
        INCOME = 1, "income"
        OUTCOME = 2, "outcome"

    title = CharField(max_length=128, default='Без названия')
    user = ForeignKey("users.User", on_delete=CASCADE)

    def __str__(self):
        return f"{self.category.title} {self.amount}" if self.category else self.amount
