from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Login
        fields = ('id_user', 'email_user', 'password_user', 'record_date_table')