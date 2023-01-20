from django.shortcuts import render
from rest_framework import generics, mixins
from .models import Room, User, Exercise
from .serializers import RoomSerializer, UserSerializer, ExerciseSerializers, UserLoginSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

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

class UserList(generics.GenericAPIView, mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.CreateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def get(self, request):
        return self.list(request)
    def post(self, request):
        return self.create(request)

class UserDetail(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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
        user_dto = UserLoginSerializer(data=request.data)
        print(user_dto)
        if user_dto.is_valid():
            email = user_dto.data.get('email')
            password = user_dto.data.get('password')
            print(User.objects.all())
            if not User.objects.filter(email=email, password=password).exists():
                print(User.objects.all().filter(email=email))
                return Response("Incorrect Password/Username", status=status.HTTP_404_NOT_FOUND)
            print(User.objects.get(email=email, password=password))
            print(UserSerializer(User.objects.get(email=email, password=password)).data)
            return Response(UserSerializer(User.objects.get(email=email, password=password)).data, status=status.HTTP_200_OK)
        print(user_dto.errors)
    return Response('BAD REQUEST', status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST', 'GET'])
@permission_classes([AllowAny])
def print_exercise_as_id(request):
    print(request)
    if request.method == 'POST':
        print("PLM")
        serz_data = ExerciseSerializers(data=request.data)
        print(serz_data)
        if (serz_data.is_valid() ):
            print("PLM")
            my_user_id = serz_data.data.get('id_for_user')
            print(my_user_id)
            if my_user_id is None:
                my_user_id = 4
            exs = Exercise.objects.all().filter(id_for_user=my_user_id)
            print(exs)
            exs_dto = ExerciseSerializers(exs, many=True)
            return Response(exs_dto.data, status=status.HTTP_202_ACCEPTED)
    return Response('BAD REQUEST', status=status.HTTP_400_BAD_REQUEST)