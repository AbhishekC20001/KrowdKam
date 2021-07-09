from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("",views.index,name='index'),
    path("userpostapi",views.UserReg,name='UserReg'),
    path("orgpostapi",views.OrgReg,name='OrgReg'),
    path("zonepostapi",views.ZoneReg,name='ZoneReg'),
    path("zonegetapi",views.ZoneGet,name='ZoneGet'),
    path("cctvpostapi",views.CamReg,name='CamReg')

]

"""
{
"gender" : "Male",
"name" : "Cokehead Chopra",
"age" : "20",
"mobile" : "99300 89269" ,
"email" : "abhishek.chopra@spit.ac.in"
}


{
    "organization" : "Infiniti Mall",
    "name" : "Big Bazaar",
    "description" : "Big Bazaar is an Indian retail chain of hypermarkets, discount department stores, and grocery stores.",
    "location" : "Upper Left Corner on 1st floor"
}


{
    "zone" : "Westside",
    "organization" : "Infiniti Mall",
    "position" : "Inside Trial Room according to Manager Chopra's instructions"
}
"""