from rest_framework import serializers
from .models import ProfileModel


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileModel
        fields = ['url', 'uuid', 'phone_number', 'address', 'postal_code']
        read_only_fields = ['uuid',]
