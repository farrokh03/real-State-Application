from django.shortcuts import render
from rest_framework import viewsets, renderers
from rest_framework import permissions
from cart.models import CartModel
from cart.serializers import CartSerializer, CartItemSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
# Create your views here.


class CartViewSets(viewsets.ModelViewSet):
    queryset = CartModel.objects.all()
    serializer_class = CartSerializer
    permission_classes = [permissions.AllowAny]

    # @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    # def items(self, request, *args, **kwargs):
    #     cart = self.get_object()
    #     items = cart.items.all()
    #     serializer = CartItemSerializer(items, many=True)
    #     return Response(serializer.data)
