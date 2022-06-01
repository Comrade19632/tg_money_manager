from rest_framework.serializers import ModelSerializer

from apps.users.serializers import UserSerializer

from ..models import Category


class CategorySerializer(ModelSerializer):
    user = UserSerializer(read_only=True)

    def save(self, user, **kwargs):
        return super().save(user=user, **kwargs)

    class Meta:
        model = Category
        fields = (
            "id",
            "title",
            "type",
            "user",
        )
