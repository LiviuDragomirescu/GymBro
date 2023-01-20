from rest_framework import serializers
from .models import MyUser, Exercise

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id', 'email', 'username', 'password']

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id', 'email', 'password']

class ExerciseSerializers(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'exercise_name', 'weight', 'sets', 'reps', 'id_for_user']