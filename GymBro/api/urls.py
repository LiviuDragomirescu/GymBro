from django.urls import path
from .views import RoomView, UserList, ExerciseList, ExerciseDetail

urlpatterns = [
    path("room", RoomView.as_view()),
    path("users/", UserList.as_view()),
    path("exercise/", ExerciseList.as_view()),
    path("exercise/<int:id>/", ExerciseDetail.as_view()),
]