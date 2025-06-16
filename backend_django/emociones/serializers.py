from rest_framework import serializers
from .models import EstadoAnimo

class EstadoAnimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstadoAnimo
        fields = '__all__'