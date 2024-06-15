from django.contrib import admin
from api.models import User, Profile

class Useradmin(admin.ModelAdmin):
    list_display=['username','email','role']

class Profileadmin(admin.ModelAdmin):
    list_editable=['verified']
    list_display=['user','verified']


admin.site.register(User, Useradmin)
admin.site.register(Profile, Profileadmin)