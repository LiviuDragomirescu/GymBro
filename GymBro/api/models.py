from django.db import models

# Create your models here.

class Room(models.Model):
    code = models.CharField(max_length=50, default=13, unique=True)
    host = models.CharField(max_length=10, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    
class User(models.Model):
    email = models.EmailField(verbose_name='email address', max_length=255)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.email

class Exercise(models.Model):
    exercise_name = models.CharField(max_length=50, default='', unique=True)
    weight = models.IntegerField(null=False, default=1)
    sets = models.IntegerField(null=False, default=1)
    reps = models.IntegerField(null=False, default=1)
