from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from rest_framework_simplejwt.views import TokenRefreshView

from apps.users.views import TokenObtainPairView


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/telethon/", include("apps.telethon_app.urls"), name="telethon"),
    path("api/orders/", include("apps.orders.urls"), name="orders"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
