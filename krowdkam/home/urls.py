from django.contrib import admin
from django.urls import path
from . import views


from django.urls import path
from home.views import MyObtainTokenPairView, RegisterView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("",views.index,name='index'),
    path("userpostapi",views.UserReg,name='UserReg'),
    path("orgpostapi",views.OrgReg,name='OrgReg'),
    path("zonepostapi",views.ZoneReg,name='ZoneReg'),
    path("zonegetapi",views.ZoneGet,name='ZoneGet'),
    path("cctvpostapi",views.CamReg,name='CamReg'),
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path("zonegetapi",views.ZoneGet,name='ZoneGet')
    # path("cctvpostapi",views.CamReg,name='CamReg')

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

{
    "organization" : "Infiniti Mall",
    "zone" : "Westside",
    "description" : "Big Bazaar is an Indian retail chain of hypermarkets, discount department stores, and grocery stores.",
    "location" : "Upper Left Corner on 1st floor",
    "cameras" : [   "Inside Washroom according to Manager Chopra's instructions", 
                    "Inside Manager's room to mointor coke consumption"
                ]
}


"""