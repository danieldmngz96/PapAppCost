from rest_framework import serializers
from .models import *


# Serializer class to interact with whole user data 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ('id_user', 'email_user', 'name_user', 'nickname_user','country_user', 'province_user', 'city_user', 'birth_date_user', 'level_studies_user', 'record_date_table')


# Serializer class to get just the login data
class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ('id_user', 'email_user', 'password_user')