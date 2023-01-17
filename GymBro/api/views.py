from django.shortcuts import render
from rest_framework import generics, mixins
from .models import Room, MyUser, Exercise
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

@csrf_exempt
@api_view(['GET', 'POST'])
def get_all_create_user(request):
    if request.method == 'GET':
        return get_all_users(request)
    elif request.method == 'POST':
        return create_user(request)
    return Response('BAD REQUEST', status=status.HTTP_400_BAD_REQUEST)


@permission_classes([AllowAny])
def get_all_users(request):
    if request.method == 'GET':
        users = MyUser.objects.all()
        user_dto = UserSerializer(users, many=True)
        return Response(user_dto.data)
    return Response('BAD REQUEST', status=status.HTTP_400_BAD_REQUEST)


@permission_classes([AllowAny])
def create_user(request):
    if request.method == 'POST':
        user_dto = UserSerializer(data=request.data)
        print(user_dto)
        if user_dto.is_valid():
            password = user_dto.data.get('password')
            email = user_dto.data.get('email')
            user = MyUser(email=email)
            user.set_password(password)
            user.save()
            return Response("User has been created!", status=status.HTTP_200_OK)
        print(user_dto.errors)
        return Response('User DTO not VALID OR ALREADY EXISTS(e.g. admin mindfuck)', status=status.HTTP_409_CONFLICT)
    return Response('BAD REQUEST', status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def find_user(request):
    if request.method == 'POST':
        user_dto = UserLoginSerializer(data=request.data)
        print(user_dto)
        if user_dto.is_valid():
            email = user_dto.data.get('email')
            password = user_dto.data.get('password')
            found_user = authenticate(email=email, password=password)
            print(email, password)
            print(MyUser.objects.all())
            if found_user is not None:
                print(MyUser.objects.all().filter(email=email))
                return Response("Incorrect Password/email", status=status.HTTP_404_NOT_FOUND)
            return Response(UserSerializer(found_user).data, status=status.HTTP_200_OK)
        print(user_dto.errors)
    return Response('BAD REQUEST', status=status.HTTP_400_BAD_REQUEST)