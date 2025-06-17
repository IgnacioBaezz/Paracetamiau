from rest_framework import serializers
from .models import OpcionHabito, SeleccionHabitoDiario

class OpcionHabitoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OpcionHabito
        fields = '__all__'

class SeleccionHabitoDiarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeleccionHabitoDiario
        fields = '__all__'