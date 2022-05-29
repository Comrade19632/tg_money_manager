from rest_framework.viewsets import ModelViewSet

from ..models import Category
from ..serializers import CategorySerializer


class CategoriesViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_queryset(self):
        queryset = super().get_queryset()

        return queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
