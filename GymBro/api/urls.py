from django.urls import path
from .views import RoomView, get_all_create_user, ExerciseList, ExerciseDetail, find_user

urlpatterns = [
    path("room", RoomView.as_view()),
    path("users/", get_all_create_user),
    path("users/login/",find_user),
    # path("users/<int:id>/", UserDetail.as_view()),
    path("exercise/", ExerciseList.as_view()),
    path("exercise/<int:id>/", ExerciseDetail.as_view()),
    path("users/<int:id>/", ExerciseDetail.as_view()),
]