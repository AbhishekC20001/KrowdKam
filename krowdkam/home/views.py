from django.db.models import query
from django.shortcuts import render, redirect
from django.apps import apps
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from guser.models import User
from .serializers import UserSerializer,OrgSerializer

# Create your views here.
def index(request):
    return render(request,'base.html')


@api_view(['POST'])
def UserReg(request):
    userser=UserSerializer(data=request.data)
    if userser.is_valid():
        userser.save()

    return Response(userser.data)

@api_view(['POST'])
def OrgReg(request):
    orgser=OrgSerializer(data=request.data)
    if orgser.is_valid():
        orgser.save()

    return Response(orgser.data)