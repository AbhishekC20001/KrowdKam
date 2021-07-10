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
from rest_framework import status



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


# @api_view(['GET'])
# def HourlyAnalysis(request):
#     zid=request.POST.get('zid')
#     oid=request.POST.get('oid')
#     cid=request.POST.get('cid')
#     organizartion_obj = Organization.objects.get(id=oid)
#     zone_obj = Zone.objects.get(organization=organizartion_obj, id=zid)
#     cam_obj = Zone.objects.get(organization=organizartion_obj, zone=zone_obj,id=cid )
#     ar_obj = list(AnalysisReport.objects.filter(organization=organizartion_obj, zone=zone_obj,camera=cam_obj).order_by("-updated_at"))[0]
#     ar_obj.total_people/cam_obj.area

#     ar = ARSerializer(ar_obj)
    



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

