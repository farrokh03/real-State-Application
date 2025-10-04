from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework import renderers
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import CategorySerializer, ItemAttributeSerializer, ItemSerializer
from .models import ItemModel, ItemAttributesModel, CategoryModel
# Create your views here.


class ItemViewSet(viewsets.ModelViewSet):
    queryset = ItemModel.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [AllowAny]
    # @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    # def author_email(self, request, *args, **kwargs):
    #     post = self.get_object()
    #     return Response(post.author.email)


class CategoryVieSet(viewsets.ModelViewSet):

    queryset = CategoryModel.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
