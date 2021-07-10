from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("",views.clienthome,name='clienthome'),
    # path("report",views.Analysis,name='Analysis')
]