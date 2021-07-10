from django import shortcuts
from django.shortcuts import render, redirect
from django.apps import apps
import datetime
from datetime import timezone


from django.http import HttpResponse
from django.shortcuts import render
# from django.utils.timezone import UTC
from .models import *
from django.core.mail import EmailMessage
from django.views.decorators import gzip
from django.http import StreamingHttpResponse
import cv2
import threading
import pytz
UTC=pytz.utc



from rest_framework.response import Response
from rest_framework.decorators import api_view
from guser.models import User
from client.models import *
from .serializers import *


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
def HourlyAnalysis(request,oid,zid,cid):
    
    now=datetime.datetime.now(UTC)
    curr=int(now.strftime("%H"))
    print(curr)

    # zid=request.POST.get('zid')
    # oid=request.POST.get('oid')
    # cid=request.POST.get('cid')
    organizartion_obj = Organization.objects.get(id=oid)
    zone_obj = Zone.objects.get(organization=organizartion_obj, id=zid)
    cam_obj = CCTVcam.objects.get(organization=organizartion_obj, zone=zone_obj,id=cid )
    ar_objs = list(AnalysisReport.objects.filter(organization=organizartion_obj, zone=zone_obj,camera=cam_obj).order_by("-updated_at"))
    print(ar_objs)
    ar_obj=None
    for i in range(len(ar_objs)):
        tmpdt=(ar_objs[i].updated_at)
        print(tmpdt)
        if (int(tmpdt.strftime("%H"))==curr and int(tmpdt.strftime("%Y"))==int(now.strftime("%Y")) and int(tmpdt.strftime("%m"))==int(now.strftime("%m")) and int(tmpdt.strftime("%d")))==int(now.strftime("%d")):
            print("Aayaaa")
            ar_obj=ar_objs[i]
    

    ar = ARSerializer(ar_obj)
    
    return Response(ar.data)