# Generated by Django 3.1.2 on 2022-05-29 21:43

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accountant", "0003_auto_20220529_2131"),
    ]

    operations = [
        migrations.AddField(
            model_name="transaction",
            name="date",
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name="transaction",
            name="is_monthly",
            field=models.BooleanField(default=False),
        ),
    ]
