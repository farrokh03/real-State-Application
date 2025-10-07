from django.shortcuts import render
from .serializers import ProfileSerializer
from rest_framework import viewsets
from .models import ProfileModel
from rest_framework import permissions
# Create your views here.


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = ProfileModel.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.AllowAny]
