from django.db.models import query
from django.shortcuts import render, redirect
from django.apps import apps
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from guser.models import User
from .serializers import UserSerializer

# Create your views here.
def index(request):
    return render(request,'base.html')

