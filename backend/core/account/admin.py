from django.contrib import admin
from .models import ProfileModel
# Register your models here.


class ProfileAdminModel(admin.ModelAdmin):

    model = ProfileModel
    list_display = ['postal_code', 'phone_number']
    list_filter = ['postal_code',]


admin.site.register(ProfileModel, ProfileAdminModel)
