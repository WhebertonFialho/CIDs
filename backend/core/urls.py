from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from cid.api.viewsets import CIDViewSet
from grupo_cid.api.viewsets import GrupoCIDViewSet

router = routers.DefaultRouter()
router.register(r'cid', CIDViewSet)
router.register(r'grupo_cid', GrupoCIDViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
