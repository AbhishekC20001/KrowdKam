from django.db.models import fields
from django.apps import apps
from rest_framework import serializers
from client.models import Organization

class OrgSerializer(serializers.ModelSerializer):
    class Meta:
        model= Organization
        fields = '__all__'

