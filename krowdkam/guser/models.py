from django.db import models
from django.utils.timezone import now
# Create your models here.


class User(models.Model):
    gender = models.CharField(max_length=10)
    username = models.CharField(max_length=200,default='')
    password = models.CharField(max_length=200,default='')
    password2 = models.CharField(max_length=200,default='')
    age = models.IntegerField(default=0)
    mobile = models.CharField(max_length=20,default='')
    email = models.CharField(max_length=500, default='')
    country_code = models.CharField(default="+91", max_length=10)
    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(default=now, editable=False)
    updated_at = models.DateTimeField(default=now, editable=False)