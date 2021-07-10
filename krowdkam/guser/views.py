from django.db.models import query
from django.shortcuts import render, redirect
from django.apps import apps
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from client.models import *
from .serializers import *
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.


def guserhome(request):
    return HttpResponse("Hello, world")


@api_view(['GET'])
def LocationCarousel(request):
    permission_classes = (IsAuthenticated,)
    try:

        nm = OrgSerializer(Organization.objects.filter(
            address__icontains="Navi Mumbai"), many=True)
        t = OrgSerializer(Organization.objects.filter(
            address__icontains="Thane"), many=True)
        m = OrgSerializer(Organization.objects.filter(
            address__icontains="Mumbai"), many=True)
        locations = {
            "Navi Mumbai": nm.data,
            "Thane": t.data,
            "Mumbai": m.data
        }
        return Response({"success": True, "data": locations}, status=status.HTTP_200_OK)
    except:
        return Response({'success': False, "message": "Bad Request"}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def zones(request, id):
    permission_classes = (IsAuthenticated,)
    try:
        organizartion_obj = Organization.objects.get(id=id)
        zone_objs = Zone.objects.filter(organization=organizartion_obj)
        zones = ZoneSerializer(zone_objs, many=True)
        print("Hello")

        zone_objs=list(zone_objs)
        res={
            "zones":zones.data,
            "zonewisecams":{},
            "livanalysis": {}
        }
        print("Hello1")
        for i in zone_objs:
            print("Hello2")

            cam_objs = CCTVcam.objects.filter(organization=organizartion_obj, zone=i)
            print("Hello3")
            cams={}

            camser=CamSerializer(cam_objs, many=True)

            res["zonewisecams"][i.id]=camser.data


            for j in cam_objs:
                ar_obj = list(AnalysisReport.objects.filter(organization=organizartion_obj, zone=i,camera=j).order_by("-updated_at"))[0]
                safety=ar_obj.total_people/j.area
                safe_str=""
                if safety>=0 and safety<1:
                    safe_str="Isolated"
                if safety>=1 and safety<2:
                    safe_str="Less Crowd"
                if safety>=2 and safety<3:
                    safe_str="Regular Crowd"
                if safety>=3 and safety<4:
                    safe_str="Crowded"
                if safety>=4:
                    safe_str="Overcrowded"
                cams[j.id]=[safety,safe_str]
            res["livanalysis"][i.id]=cams
        print("Hello 10")



        print(res)
        return Response({"success":True,"data":res}, status=status.HTTP_200_OK)
    except:
        return Response({'success': False, "message": "Bad Request"}, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET'])
# def zones(request, id):
#     permission_classes = (IsAuthenticated,)
#     organizartion_obj = Organization.objects.get(id=id)
#     zone_objs = Zone.objects.filter(organization=organizartion_obj)
#     zones = ZoneSerializer(zone_objs, many=True)
#     print("Hello")

#     zone_objs = list(zone_objs)
#     res = {
#           "zones": zones.data,
#           "zonewisecams": {},
#             "livanalysis": {}
#           }
#     print("Hello1")
#     for i in zone_objs:
#             print("Hello2")

#             cam_objs = CCTVcam.objects.filter(
#                 organization=organizartion_obj, zone=i)
#             print("Hello3")
#             cams = {}

#             camser = CamSerializer(cam_objs, many=True)

#             res["zonewisecams"][i.id] = camser.data

#             for j in cam_objs:
#                 ar_obj = list(AnalysisReport.objects.filter(
#                     organization=organizartion_obj, zone=i, camera=j).order_by("-updated_at"))
#                 if len(ar_obj)>0:
#                     ar_obj=ar_obj[0]
#                     safety = ar_obj.total_people/j.area
#                     safe_str = ""
#                     if safety >= 0 and safety < 1:
#                         safe_str = "Isolated"
#                     if safety >= 1 and safety < 2:
#                         safe_str = "Less Crowd"
#                     if safety >= 2 and safety < 3:
#                         safe_str = "Regular Crowd"
#                     if safety >= 3 and safety < 4:
#                         safe_str = "Crowded"
#                     if safety >= 4:
#                         safe_str = "Overcrowded"
#                     cams[j.id] = [safety, safe_str]
#             res["livanalysis"][i.id] = cams
#     print("Hello 10")

#     print(res)
#     return Response({"success": True, "data": res, "code": 1})

