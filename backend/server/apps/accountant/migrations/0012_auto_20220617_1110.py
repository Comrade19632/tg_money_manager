# Generated by Django 3.1.2 on 2022-06-17 11:10

import datetime

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accountant", "0011_auto_20220607_2055"),
    ]

    operations = [
        migrations.AlterField(
            model_name="transaction",
            name="date",
            field=models.DateField(default=datetime.date.today),
        ),
    ]
