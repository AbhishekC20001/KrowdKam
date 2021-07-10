from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("",views.clienthome,name='clienthome'),
    path("report/<str:org>/<str:zone>",views.Analysis,name='Analysis')
]