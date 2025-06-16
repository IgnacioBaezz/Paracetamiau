from rest_framework import viewsets
from .models import EstadoAnimo
from .serializers import EstadoAnimoSerializer
from rest_framework.permissions import AllowAny

class EstadoAnimoViewSet(viewsets.ModelViewSet):
    queryset = EstadoAnimo.objects.all().order_by("-fecha")
    serializer_class = EstadoAnimoSerializer
    permission_classes = [AllowAny]