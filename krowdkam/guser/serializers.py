from django.db.models import fields
from django.apps import apps
from rest_framework import serializers
from client.models import *


class OrgSerializer(serializers.ModelSerializer):
    class Meta:
        model= Organization
        fields = '__all__'


class ZoneSerializer(serializers.ModelSerializer):
    class Meta:
        model= Zone
        fields = '__all__'


class CamSerializer(serializers.ModelSerializer):
    class Meta:
        model= CCTVcam
        fields = '__all__'

