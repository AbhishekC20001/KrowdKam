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

import os
import imutils
import numpy as np
from .detection import social_distance_config as config
from .detection.detection import detect_people
import argparse
from scipy.spatial import distance as dist
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent

from PIL import Image
from numpy import asarray

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
    

# initial configuration for object detection
labelsPath = os.path.sep.join([config.MODEL_PATH, "coco.names"])
print(labelsPath)
# labelsPath = os.path.abspath(labelsPath)
labelsPath = "client\\" + labelsPath
print(labelsPath)
LABELS = open(labelsPath).read().strip().split("\n")
# derive the paths to the YOLO weights and model configuration
weightsPath = "client\\" + os.path.sep.join([config.MODEL_PATH, "yolov3.weights"])
configPath = "client\\" + os.path.sep.join([config.MODEL_PATH, "yolov3.cfg"])

# load our YOLO object detector trained on COCO dataset (80 classes)
print("[INFO] loading YOLO from disk...")
net = cv2.dnn.readNetFromDarknet(configPath, weightsPath)
print("Checking for net: ",net)
# determine only the *output* layer names that we need from YOLO
ln = net.getLayerNames()
ln = [ln[i[0] - 1] for i in net.getUnconnectedOutLayers()]
# initialize the video stream and pointer to output video file
print("[INFO] accessing video stream...: ",len(LABELS))


@api_view(['GET'])
def crowd_count(request):
    oid = request.GET.get('oid')
    zid = request.GET.get('zid')
    iid = request.GET.get('iid')
    # image = request.POST.get('image')
    position = request.GET.get('position')
    # try:
    organization_obj = Organization.objects.get(id=oid)
    zone_obj = Zone.objects.get(id=zid)
    image = File.objects.get(id=iid)
    cctv_obj = CCTVcam(organization=organization_obj,zone=zone_obj,recording=image,position=position)
    cctv_obj.save()

    print(image.file)
    image = Image.open(os.path.join(BASE_DIR, "media", str(image.file)))
    # convert image to numpy array
    frame = asarray(image)
    # frame = os.path.join(BASE_DIR, "media", loc)
    # print(self.frame)
    frame = imutils.resize(frame, width=700)
    results = detect_people(frame, net, ln,personIdx=LABELS.index("person"))

    ppl_count = len(results)

    analysis_report_obj = AnalysisReport(organization=organization_obj,zone=zone_obj,camera=cctv_obj,total_people=ppl_count)
    analysis_report_obj.save()

    return Response({"success": True, "message": "done"}, status = status.HTTP_200_OK)
    # except:
    #     return Response({'success': False, "message": "Bad Request"}, status=status.HTTP_400_BAD_REQUEST)


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
