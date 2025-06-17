from rest_framework import viewsets
from .models import EstadoAnimo
from .serializers import EstadoAnimoSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

class EstadoAnimoViewSet(viewsets.ModelViewSet):
    queryset = EstadoAnimo.objects.all()
    serializer_class = EstadoAnimoSerializer
    permission_classes = [IsAuthenticated]