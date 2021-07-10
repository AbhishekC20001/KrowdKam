from django import shortcuts
from django.shortcuts import render, redirect
from django.apps import apps


from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from django.core.mail import EmailMessage
from django.views.decorators import gzip
from django.http import StreamingHttpResponse
import cv2
import threading



from rest_framework.response import Response
from rest_framework.decorators import api_view
from guser.models import User
from client.models import Organization,CCTVcam,Zone, AnalysisReport
from .serializers import UserSerializer,OrgSerializer,ZoneSerializer,CCTVSerializer, ARSerializer


# Create your views here.
def clienthome(request):
    return HttpResponse("Hello, world")


@gzip.gzip_page
def Home(request):
    try:
        cam = VideoCamera()
        return StreamingHttpResponse(gen(cam), content_type="multipart/x-mixed-replace;boundary=frame")
    except:
        pass
    return render(request, 'recording.html')


# to capture video class
class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
        (self.grabbed, self.frame) = self.video.read()
        threading.Thread(target=self.update, args=()).start()

    def __del__(self):
        self.video.release()

    def get_frame(self):
        image = self.frame
        _, jpeg = cv2.imencode('.jpg', image)
        return jpeg.tobytes()

    def update(self):
        while True:
            (self.grabbed, self.frame) = self.video.read()


def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


@api_view(['GET'])
def Analysis(request,zone,org):
    organizartion_obj = Organization.objects.get(name=org)
    zone_obj = Zone.objects.get(organization=organizartion_obj, name=zone)
    ar_obj = list(AnalysisReport.objects.filter(organization=organizartion_obj, zone=zone_obj).order_by("-updated_at"))[0]
    ar = ARSerializer(ar_obj)
    
    return Response(ar.data)