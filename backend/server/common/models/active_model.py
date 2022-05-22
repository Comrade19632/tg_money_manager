from django.db.models import BooleanField, Model


class ActiveModel(Model):
    is_active = BooleanField(
        verbose_name="Активная?",
        default=True,
        db_index=True,
    )

    class Meta:
        abstract = True
