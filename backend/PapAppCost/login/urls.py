from django.urls import path
from . import views


# urls settings to functions views
app_name = 'login'

urlpatterns = [
    #example: login/
    path('', views.UserLoginAPI, name='sign-in'),    
]