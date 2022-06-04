from rest_framework.serializers import ModelSerializer

from ..models import Transaction
from .category_serializer import CategorySerializer


class TransactionSerializer(ModelSerializer):
    category = CategorySerializer()

    def save(self, user, **kwargs):
        return super().save(user=user, **kwargs)

    class Meta:
        model = Transaction
        fields = (
            "id",
            "amount",
            "enum_type",
            "date",
            "is_monthly",
            "category",
            "is_correction",
            "title",
        )
