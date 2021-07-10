from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("",views.clienthome,name='clienthome'),
    path("report/<int:oid>/<int:zid>/<int:cid>",views.Analysis,name='Analysis')
]