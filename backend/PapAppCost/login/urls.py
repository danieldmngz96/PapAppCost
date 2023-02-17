from django.urls import path, re_path
from . import views


urlpatterns = [
    # paths for whole user data
    re_path(r'^signin/?$', views.UserDataAPI),
    re_path(r'^signin/([0-9]+)/?$', views.UserDataAPI),

    # path for just user login data 
    re_path(r'([0-9]+)/?$', views.UserLoginAPI),
]