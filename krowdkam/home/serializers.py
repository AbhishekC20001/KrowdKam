from django.db.models import fields
from django.apps import apps
from rest_framework import serializers
from guser.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = '__all__'

