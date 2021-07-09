from django.db.models import query
from django.shortcuts import render, redirect
from django.apps import apps
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from client.models import Organization
from .serializers import OrgSerializer

# Create your views here.
def guserhome(request):
    return HttpResponse("Hello, world")


@api_view(['GET'])
def LocationCarousel(request):
    nm=OrgSerializer(Organization.objects.filter(address__icontains="Navi Mumbai"),many=True)
    t=OrgSerializer(Organization.objects.filter(address__icontains="Thane"),many=True)
    m=OrgSerializer(Organization.objects.filter(address__icontains="Mumbai"),many=True)
    locations={
        "Navi Mumbai": nm.data,
        "Thane": t.data,
        "Mumbai": m.data
    }
    return Response(locations)
