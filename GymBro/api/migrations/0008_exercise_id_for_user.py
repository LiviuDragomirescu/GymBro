# Generated by Django 4.1.5 on 2023-01-20 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0007_user_username"),
    ]

    operations = [
        migrations.AddField(
            model_name="exercise",
            name="id_for_user",
            field=models.IntegerField(default=22),
            preserve_default=False,
        ),
    ]
