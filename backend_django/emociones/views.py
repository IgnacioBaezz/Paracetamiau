from rest_framework import viewsets
from .models import EstadoAnimo
from .serializers import EstadoAnimoSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.utils import timezone


class EstadoAnimoViewSet(viewsets.ModelViewSet):
    queryset = EstadoAnimo.objects.all()
    serializer_class = EstadoAnimoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        hoy = timezone.now().date()
        momento = self.request.query_params.get("momento")
        queryset = EstadoAnimo.objects.filter(usuario=user, fecha=hoy)
        if momento:
            queryset = queryset.filter(momento=momento)
        return queryset