from django.urls import path
from .views import RoomView, UserList, ExerciseList, ExerciseDetail, find_user

urlpatterns = [
    path("room", RoomView.as_view()),
    path("users/", UserList.as_view()),
    path("users/login/",find_user),
    # path("users/<int:id>/", UserDetail.as_view()),
    path("exercise/", ExerciseList.as_view()),
    path("exercise/<int:id>/", ExerciseDetail.as_view()),
    path("users/<int:id>/", ExerciseDetail.as_view()),
]