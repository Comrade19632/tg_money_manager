from rest_framework.serializers import ModelSerializer

from apps.users.serializers import UserSerializer

from ..models import Transaction
from .category_serializer import CategorySerializer


class TransactionSerializer(ModelSerializer):
    user = UserSerializer(read_only=True)
    category = CategorySerializer()

    def save(self, user, **kwargs):
        return super().save(user=user, **kwargs)

    class Meta:
        model = Transaction
        fields = ("id", "amount", "type", "date", "is_monthly", "user", "category")
