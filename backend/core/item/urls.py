from django.urls import path, include
from .views import ItemViewSet

urlpatterns = [
    path("items/", ItemViewSet.as_view({"get": "list"}), name='item-list'),
]
