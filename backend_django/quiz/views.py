from django.shortcuts import render
from rest_framework import viewsets
from .models import Pregunta, OpcionRespuesta, RespuestaUsuario
from .serializers import PreguntaSerializer, OpcionRespuestaSerializer, RespuestaUsuarioSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

class PreguntaViewSet(viewsets.ModelViewSet):
    queryset = Pregunta.objects.all()
    serializer_class = PreguntaSerializer
    permission_classes = [IsAuthenticated]

class OpcionRespuestaViewSet(viewsets.ModelViewSet):
    queryset = OpcionRespuesta.objects.all()
    serializer_class = OpcionRespuestaSerializer
    permission_classes = [IsAuthenticated]

class RespuestaUsuarioViewSet(viewsets.ModelViewSet):
    queryset = RespuestaUsuario.objects.all()
    serializer_class = RespuestaUsuarioSerializer
    permission_classes = [IsAuthenticated]
