from django.contrib import admin
from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path("",views.clienthome,name='clienthome'),
    path("report/<int:oid>/<int:zid>/<int:cid>",views.Analysis,name='Analysis'),
    path("crowd_count/",views.crowd_count,name='crowd_count'),
    path("file_upload/", FileUploadView.as_view()),

]
