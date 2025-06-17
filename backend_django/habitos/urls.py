from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OpcionHabitoViewSet, SeleccionHabitoDiarioViewSet

router = DefaultRouter()
router.register("", OpcionHabitoViewSet)
router.register("", SeleccionHabitoDiarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
]