from rest_framework import serializers
from .models import Room, User, Exercise

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password']

class ExerciseSerializers(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'exercise_name', 'weight', 'sets', 'reps']