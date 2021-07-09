from django.db.models import fields
from django.apps import apps
from rest_framework import serializers
from guser.models import User
from client.models import Organization,Zone,CCTVcam


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = '__all__'

class OrgSerializer(serializers.ModelSerializer):
    class Meta:
        model= Organization
        fields = '__all__'

class ZoneSerializer(serializers.ModelSerializer):
    class Meta:
        model= Zone
        fields = '__all__'

class CCTVSerializer(serializers.ModelSerializer):
    class Meta:
        model= CCTVcam
        fields = '__all__'
