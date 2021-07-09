from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("",views.index,name='index'),
    path("userpostapi",views.UserReg,name='UserReg')

]

"""
{
"gender" : "Male",
"name" : "Cokehead Chopra",
"age" : "20",
"mobile" : "99300 89269" ,
"email" : "abhishek.chopra@spit.ac.in"
}
"""