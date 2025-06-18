from rest_framework import viewsets
from .models import OpcionHabito, SeleccionHabitoDiario
from .serializers import OpcionHabitoSerializer, SeleccionHabitoDiarioSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
# Create your views here.

class OpcionHabitoViewSet(viewsets.ModelViewSet):
    queryset = OpcionHabito.objects.all()
    serializer_class = OpcionHabitoSerializer
    permission_classes = [AllowAny]

class SeleccionHabitoDiarioViewSet(viewsets.ModelViewSet):
    queryset = SeleccionHabitoDiario.objects.all()
    serializer_class = SeleccionHabitoDiarioSerializer
    permission_classes = [AllowAny]
