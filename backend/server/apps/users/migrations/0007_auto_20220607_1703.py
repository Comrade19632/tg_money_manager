# Generated by Django 3.1.2 on 2022-06-07 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0006_user_savings"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="savings",
            field=models.FloatField(blank=True, null=True),
        ),
    ]