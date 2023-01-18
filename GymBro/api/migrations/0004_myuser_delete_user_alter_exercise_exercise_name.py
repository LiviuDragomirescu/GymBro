# Generated by Django 4.1.5 on 2023-01-17 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_exercise"),
    ]

    operations = [
        migrations.CreateModel(
            name="MyUser",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                (
                    "email",
                    models.EmailField(
                        max_length=255, unique=True, verbose_name="email address"
                    ),
                ),
            ],
            options={"abstract": False,},
        ),
        migrations.DeleteModel(name="User",),
        migrations.AlterField(
            model_name="exercise",
            name="exercise_name",
            field=models.CharField(default="", max_length=50, unique=True),
        ),
    ]