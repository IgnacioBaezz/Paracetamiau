from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EstadoAnimoViewSet

router = DefaultRouter()
router.register(r'entradas', EstadoAnimoViewSet, basename='estadoanimo')

urlpatterns = [
    path('', include(router.urls)), 
]