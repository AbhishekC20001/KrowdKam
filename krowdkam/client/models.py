from django.db import models
from django.utils.timezone import now
# Create your models here.


def upload_cam_recordings(instance, filename):
    return 'recording/recording_{0}/files/{1}'.format(instance.id, filename)


class Organization(models.Model):
    name = models.CharField(max_length=500, default='')
    description = models.CharField(max_length=600)
    address = models.CharField(max_length=1000, default='')
    long = models.DecimalField(max_digits=9, decimal_places=6)
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(default=now, editable=False)
    updated_at = models.DateTimeField(default=now, editable=False)


class Zone(models.Model):
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE,default=None,null=True, blank=True)
    name = models.CharField(max_length=500, default='')
    description = models.CharField(max_length=600)
    location = models.CharField(max_length=1000, default='')
    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(default=now, editable=False)
    updated_at = models.DateTimeField(default=now, editable=False)


class CCTVcam(models.Model):
    zone = models.ForeignKey(Zone, on_delete=models.CASCADE,default=None,null=True, blank=True)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, default=None, null=True, blank=True)
    recording = models.FileField(upload_to=upload_cam_recordings, null=True, blank=True)
    position = models.CharField(max_length=1000, default='')
    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(default=now, editable=False)
    updated_at = models.DateTimeField(default=now, editable=False)


class AnalysisReport(models.Model):
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, default=None, null=True, blank=True)
    num_of_infringements = models.IntegerField(default=0)
    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(default=now, editable=False)
    updated_at = models.DateTimeField(default=now, editable=False)



