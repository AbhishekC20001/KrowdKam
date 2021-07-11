from django.contrib import admin
from django.urls import path
from . import views


from django.urls import path
from home.views import MyObtainTokenPairView, RegisterView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [

    path("zonepostapi",views.ZoneReg,name='ZoneReg'),

    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),


]

