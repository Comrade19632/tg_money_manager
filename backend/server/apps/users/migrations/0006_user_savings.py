# Generated by Django 3.1.2 on 2022-06-07 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0005_remove_user_modified"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="savings",
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
