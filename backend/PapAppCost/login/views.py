from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import *
from .serializers import *

# Function Views for APIS

@csrf_exempt
def UserLoginAPI (request, id=0):
    if (request.method=='GET' and int(id) > 0):
        user=User_Login.objects.filter(id_user=id)
        user_serializer=UserSerializer(user, many=True)
        return JsonResponse(user_serializer.data,safe=False)
    elif request.method=='GET':   
        users = User_Login.objects.all()
        users_serializer=UserSerializer(users,many=True)
        return JsonResponse(users_serializer.data,safe=False)
    elif request.method=='POST':
            user_data=JSONParser().parse(request)
            users_serializer=UserSerializer(data=user_data)
            if users_serializer.is_valid():
                users_serializer.save()
                return JsonResponse("Record Inserted Successfully",safe=False)
            return JsonResponse("Oops...something went wrong.",safe=False)
    elif request.method=='PUT':
            user_data=JSONParser().parse(request)
            user=User_Login.objects.get(id_user=user_data['id_user'])
            users_serializer=UserSerializer(user,data=user_data)
            if users_serializer.is_valid():
                users_serializer.save()
                return JsonResponse("Record Updated Successfully",safe=False)
            return JsonResponse("There is some error updating the record", safe=False)
    elif request.method=='DELETE':
        user=User_Login.objects.get(CustomerId=id)
        user.delete()
        return JsonResponse("Record Deleted Successfully",safe=False)
