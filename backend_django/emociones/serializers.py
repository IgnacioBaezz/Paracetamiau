from rest_framework import serializers
from .models import EstadoAnimo

class EstadoAnimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstadoAnimo
        fields = ["id", "emocion", "nota", "momento", "fecha"]
        read_only_fields = ["fecha"]

    def create(self, validated_data):
        validated_data["usuario"] = self.context["request"].user
        return super().create(validated_data)