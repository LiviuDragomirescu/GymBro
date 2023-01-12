from django.shortcuts import render
from rest_framework import generics, mixins
from .models import Room, User, Exercise
from .serializers import RoomSerializer, UserSerializers, ExerciseSerializers

# Create your views here.

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class UserList(generics.GenericAPIView, mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.CreateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializers

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

class ExerciseList(generics.GenericAPIView, mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.CreateModelMixin):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializers

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

class ExerciseDetail(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializers

    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)
    
    def put(self, request, id):
        return self.update(request, id=id)

    def delete(self, request, id):
        return self.destroy(request, id=id)