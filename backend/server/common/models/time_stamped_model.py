from django.db.models import Model

from model_utils.fields import AutoCreatedField, AutoLastModifiedField


class TimeStampedModel(Model):
    created = AutoCreatedField(verbose_name="Создан", editable=True, db_index=True)
    modified = AutoLastModifiedField(verbose_name="Изменен", db_index=True)

    class Meta:
        abstract = True
