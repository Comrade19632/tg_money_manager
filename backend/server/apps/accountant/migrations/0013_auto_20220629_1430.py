# Generated by Django 3.1.2 on 2022-06-29 14:30

import datetime

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accountant", "0012_auto_20220617_1110"),
    ]

    operations = [
        migrations.AlterField(
            model_name="transaction",
            name="date",
            field=models.DateField(blank=True, default=datetime.date.today, null=True),
        ),
    ]
