# Generated by Django 3.1.2 on 2022-05-29 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accountant", "0002_transaction"),
    ]

    operations = [
        migrations.AddField(
            model_name="category",
            name="type",
            field=models.IntegerField(
                choices=[(1, "income"), (2, "outcome")], default=2
            ),
        ),
        migrations.AddField(
            model_name="transaction",
            name="type",
            field=models.IntegerField(
                choices=[(1, "income"), (2, "outcome")], default=2
            ),
        ),
    ]
