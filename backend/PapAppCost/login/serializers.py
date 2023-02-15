from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ('id_user', 'email_user', 'password_user', 'country_user', 'province_user', 'city_user', 'birth_date_user', 'level_studies_user', 'record_date_table')