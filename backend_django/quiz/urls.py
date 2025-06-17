from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PreguntaViewSet, OpcionRespuestaViewSet, RespuestaUsuarioViewSet

router = DefaultRouter()
router.register("", PreguntaViewSet)
router.register("", OpcionRespuestaViewSet)
router.register("", RespuestaUsuarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
]