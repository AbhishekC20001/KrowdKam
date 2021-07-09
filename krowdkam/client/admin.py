from django.contrib import admin
from .models import Organization,Zone,CCTVcam,AnalysisReport

# Register your models here.
admin.site.register(Organization)
admin.site.register(Zone)
admin.site.register(CCTVcam)
admin.site.register(AnalysisReport)
