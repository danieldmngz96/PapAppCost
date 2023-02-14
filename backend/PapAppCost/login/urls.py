from django.urls import path, re_path
from . import views


urlpatterns = [
    #example: login/
    re_path(r'^login/?$', views.UserLoginAPI),
    re_path(r'^login/([0-9]+)/?$', views.UserLoginAPI, name='login'),
]