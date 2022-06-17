from unicodedata import category

from rest_framework.serializers import ModelSerializer, SlugRelatedField

from ..models import Category, Transaction
from .category_serializer import CategorySerializer


class TransactionSerializer(ModelSerializer):
    category = CategorySerializer(read_only=True)

    def save(self, user, category=None, **kwargs):
        return super().save(user=user, category=category, **kwargs)

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
