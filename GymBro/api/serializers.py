from rest_framework import serializers
from .models import Room, MyUser, Exercise


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id', 'email', 'username', 'password']

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['username', 'password']

class ExerciseSerializers(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'exercise_name', 'weight', 'sets', 'reps']