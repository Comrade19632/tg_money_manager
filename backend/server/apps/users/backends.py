from django.contrib.auth.backends import ModelBackend

from funcy import first

from apps.users.models import User
from apps.users.services import verify_telegram_authentication


class AuthBackend(ModelBackend):
    def authenticate(self, request, **kwargs):
        if not getattr(request, "data", False):
            return
        if not request._request.get_host() in ["localhost", "backend:8000"]:
            verify_telegram_authentication(request.data)
        if id := request.data.get("id"):
            return first(User.objects.get_or_create(telegram_id=id))
        return
