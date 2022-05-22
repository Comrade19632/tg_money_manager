from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, telegram_id, password=None, **kwargs):
        user = self.model(telegram_id=telegram_id, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, **kwargs):
        user = self.create_user(**kwargs)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user
