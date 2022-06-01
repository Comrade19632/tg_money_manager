from django.urls import include, path

from rest_framework.routers import DefaultRouter

from .views import CategoriesViewSet, TransactionsViewSet


app_name = "accountant"

router = DefaultRouter()

router.register("transactions", TransactionsViewSet, basename="transactions")
router.register("categories", CategoriesViewSet, basename="categories")

urlpatterns = [
    path("", include(router.urls)),
]
