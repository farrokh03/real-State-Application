"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from item.views import ItemViewSet
from user.views import UserViewSet
from cart.views import CartViewSets
from account.views import ProfileViewSet

router = DefaultRouter()
router.register(r'api/items', ItemViewSet),
router.register(r'api/users', UserViewSet),
router.register(r'api/cart', CartViewSets),
router.register(r'api/user/profile', ProfileViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    # path("", include("item.urls")),
    path('', include(router.urls)),

    path('api-auth/', include('rest_framework.urls'))
]
