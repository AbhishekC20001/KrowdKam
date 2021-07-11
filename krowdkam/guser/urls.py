from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("location_carousel/",views.LocationCarousel,name='LocationCarousel'),
    path("zones/<int:id>/",views.zones,name='Zones'),

]