from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])
    password_confirm = serializers.CharField(write_only=True)
    nombre_completo = serializers.CharField(source='obtener_nombre_completo', read_only=True)
    iniciales = serializers.CharField(source='obtener_iniciales', read_only=True)
    
    class Meta:
        model = Usuario
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name',
            'telefono', 'fecha_nacimiento', 'avatar', 'biografia',
            'recibir_mensajes', 'recibir_notificaciones', 'ubicacion',
            'fecha_creacion', 'fecha_actualizacion', 'ultimo_acceso',
            'esta_verificado', 'is_active', 'password', 'password_confirm',
            'nombre_completo', 'iniciales'
        ]
        extra_kwargs = {
            'email': {'required': True},
            'fecha_creacion': {'read_only': True},
            'fecha_actualizacion': {'read_only': True},
            'ultimo_acceso': {'read_only': True},
            'esta_verificado': {'read_only': True},
        }
    
    def validate(self, attrs):
        if 'password' in attrs and 'password_confirm' in attrs:
            if attrs['password'] != attrs['password_confirm']:
                raise serializers.ValidationError({
                    'password_confirm': 'Las contraseñas no coinciden.'
                })
        return attrs
    
    def validate_email(self, value):
        if Usuario.objects.filter(email=value).exists():
            if not self.instance or self.instance.email != value:
                raise serializers.ValidationError('Este email ya está registrado.')
        return value
    
    def create(self, validated_data):
        validated_data.pop('password_confirm', None)
        password = validated_data.pop('password')
        usuario = Usuario.objects.create_user(**validated_data)
        usuario.set_password(password)
        usuario.save()
        return usuario
    
    def update(self, instance, validated_data):
        validated_data.pop('password_confirm', None)
        password = validated_data.pop('password', None)
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        
        if password:
            instance.set_password(password)
        
        instance.save()
        return instance


class UsuarioListSerializer(serializers.ModelSerializer):
    """Serializer simplificado para listados"""
    nombre_completo = serializers.CharField(source='obtener_nombre_completo', read_only=True)
    
    class Meta:
        model = Usuario
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name',
            'avatar', 'esta_verificado', 'is_active', 'fecha_creacion',
            'nombre_completo'
        ]


class UsuarioPerfilSerializer(serializers.ModelSerializer):
    """Serializer para perfil público (sin datos sensibles)"""
    nombre_completo = serializers.CharField(source='obtener_nombre_completo', read_only=True)
    iniciales = serializers.CharField(source='obtener_iniciales', read_only=True)
    
    class Meta:
        model = Usuario
        fields = [
            'id', 'username', 'first_name', 'last_name', 'avatar',
            'biografia', 'ubicacion', 'fecha_creacion', 'nombre_completo',
            'iniciales', 'esta_verificado'
        ]
