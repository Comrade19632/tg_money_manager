from django.urls import include, path

from rest_framework.routers import DefaultRouter

from .views import UsersViewSet


app_name = "users"

router = DefaultRouter()

router.register("", UsersViewSet, basename="")

urlpatterns = [
    path("", include(router.urls)),
]
