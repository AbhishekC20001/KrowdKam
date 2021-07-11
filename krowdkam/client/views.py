from django import shortcuts
from django.shortcuts import render, redirect
from django.apps import apps
import datetime
from datetime import timezone, timedelta


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
IST=pytz.timezone('Asia/Kolkata')



from rest_framework.response import Response
from rest_framework.decorators import api_view
from guser.models import User

# from client.models import Organization,CCTVcam,Zone, AnalysisReport
from .serializers import UserSerializer,OrgSerializer,ZoneSerializer,CCTVSerializer, ARSerializer, FileSerializer

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
def HourlyAnalysis(request):
    try:
        # ,oid,zid,cid
        now=datetime.datetime.now(UTC)
        inow=datetime.datetime.now(IST)
        # curr=int(now.strftime("%H"))
        icurr=int(inow.strftime("%H"))

        print(icurr)

        zid=request.GET.get('zid')
        oid=request.GET.get('oid')
        cid=request.GET.get('cid')
        organizartion_obj = Organization.objects.get(id=oid)
        zone_obj = Zone.objects.get(organization=organizartion_obj, id=zid)
        cam_obj = CCTVcam.objects.get(organization=organizartion_obj, zone=zone_obj,id=cid )
        
        # time_threshold = datetime.now() - timedelta(hours=curr)
        # results = Widget.objects.filter(created__lt=time_threshold)

        ar_objs = list(AnalysisReport.objects.filter(organization=organizartion_obj, zone=zone_obj,camera=cam_obj).order_by("-updated_at"))
        print(ar_objs)
        ar_obj=None
        res={}
        j=icurr
        print("Helooo")
        print(now.astimezone(IST))
        for i in range(len(ar_objs)):
            tmpdt=(ar_objs[i].updated_at)
            tmpdt=tmpdt.astimezone(IST)
            print(tmpdt)
            if (int(tmpdt.strftime("%H"))==j and int(tmpdt.strftime("%Y"))==int(inow.strftime("%Y")) and int(tmpdt.strftime("%m"))==int(inow.strftime("%m")) and int(tmpdt.strftime("%d")))==int(inow.strftime("%d")):
                print("Aayaaa")
                ar_obj=ar_objs[i]
                
                # k=datetime.datetime.fromtimestamp(tmpdt).strftime("%H")
                res[j]=ar_obj.total_people
                if j>0:    
                    j-=1
                else:
                    break
    

        # ar = ARSerializer(ar_obj)
        return Response(res,status=status.HTTP_200_OK)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    




@api_view(['POST'])
def crowd_count(request):
    oid = request.POST.get('oid')
    zid = request.POST.get('zid')
    image = request.POST.get('image')
    position = request.POST.get('position')
    if 1:
        organization_obj = Organization.objects.get(id=oid)
        zone_obj = Zone.objects.get(id=zid)
        cctv_obj = CCTVcam(organization=organization_obj,zone=zone_obj,recording=image,position=position)
        cctv_obj.save()

        return Response({"success": True, "message": "done"}, status = status.HTTP_200_OK)
    #except:
        #return Response({'success': False, "message": "Bad Request"}, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


class FileUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):

      file_serializer = FileSerializer(data=request.data)

      if file_serializer.is_valid():
          file_serializer.save()
          return Response(file_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
