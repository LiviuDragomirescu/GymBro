from django.shortcuts import render
from rest_framework import generics, mixins
from .models import Room, User, Exercise
from .serializers import RoomSerializer, UserSerializers, ExerciseSerializers
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser

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

class UserDetail(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializers

    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)
    
    def put(self, request, id):
        return self.update(request, id=id)

    def delete(self, request, id):
        return self.destroy(request, id=id)

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


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def find_user(request):
    if request.method == 'POST':
        user_dto = UserSerializers(data=request.data)
        print(user_dto)
        if user_dto.is_valid():
            email = user_dto.data.get('email')
            password = user_dto.data.get('password')
            print(User.objects.all())
            if not User.objects.filter(email=email, password=password).exists():
                print(User.objects.all().filter(email=email))
                return Response("Incorrect Password/Username", status=status.HTTP_404_NOT_FOUND)
            return Response(UserSerializers(User.objects.get(email=email, password=password)).data, status=status.HTTP_200_OK)
        print(user_dto.errors)
    return Response('BAD REQUEST', status=status.HTTP_400_BAD_REQUEST)
