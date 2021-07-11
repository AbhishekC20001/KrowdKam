from django.contrib import admin
from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path("report/",views.HourlyAnalysis,name='HourlyAnalysis'),
    path("crowd_count/",views.crowd_count,name='crowd_count'),
    path("file_upload/", FileUploadView.as_view()),

]

