from django.db.models import Model

from model_utils.fields import AutoCreatedField


class TimeStampedModel(Model):
    created = AutoCreatedField(verbose_name="Создан", editable=True, db_index=True)

    class Meta:
        abstract = True
