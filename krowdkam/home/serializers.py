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


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        return token


from rest_framework import serializers
from guser.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'mobile', 'age', 'gender','country_code')
        '''
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }
        '''

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            mobile=validated_data['mobile'],
            age=validated_data['age'],
            gender=validated_data['gender'],
            country_code=validated_data['country_code']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user