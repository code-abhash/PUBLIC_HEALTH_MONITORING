from django.contrib import admin
from api.models import User, Profile, Patient

class Useradmin(admin.ModelAdmin):
    list_display=['username','email','role']

class Profileadmin(admin.ModelAdmin):
    list_editable=['verified']
    list_display=['role','Name','specialty','verified']

class Patientadmin(admin.ModelAdmin):
    list_display=['patientName', 'patientId', 'doctorName', 'appointmentDate',
            'appointmentTime', 'heartRate', 'diastolicBP', 'systolicBP', 'bodyTemp', 'spo2Value']
    
# class Doctoradmin(admin.ModelAdmin):
#     list_display=['role','Name','specialty']
#     list_editable=['Name','specialty']


# class Nurseadmin(admin.ModelAdmin):
#     list_display=['role','nurseName']
#     list_editable=['nurseName']

admin.site.register(User, Useradmin)
admin.site.register(Profile, Profileadmin)
admin.site.register(Patient, Patientadmin)
#admin.site.register(Doctor, Doctoradmin)
# admin.site.register(Nurse, Nurseadmin)
