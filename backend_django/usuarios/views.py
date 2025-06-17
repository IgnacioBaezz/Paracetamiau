from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from django.contrib.auth import authenticate
from .models import Usuario
from .serializers import UsuarioSerializer, UsuarioListSerializer, UsuarioPerfilSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.filter(is_active=True)
    serializer_class = UsuarioSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['is_active', 'esta_verificado', 'recibir_mensajes']
    search_fields = ['username', 'first_name', 'last_name', 'email']
    ordering_fields = ['fecha_creacion', 'username', 'last_login']
    ordering = ['-fecha_creacion']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return UsuarioListSerializer
        elif self.action == 'perfil':
            return UsuarioPerfilSerializer
        return UsuarioSerializer
    
    def get_permissions(self):
        """Modificar los permisos según la acción."""
        if self.action == 'create' or self.action == 'reset_password':
            return [AllowAny()]
        return [IsAuthenticated()]
    
    def create(self, request, *args, **kwargs):
        """Crear nuevo usuario"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        usuario = serializer.save()
        
        headers = self.get_success_headers(serializer.data)
        return Response({
            'message': 'Usuario creado exitosamente',
            'usuario': serializer.data
        }, status=status.HTTP_201_CREATED, headers=headers)
    
    def update(self, request, *args, **kwargs):
        """Actualizar usuario"""
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        usuario = serializer.save()
        
        return Response({
            'message': 'Usuario actualizado exitosamente',
            'usuario': serializer.data
        })
    
    def destroy(self, request, *args, **kwargs):
        """Desactivar usuario en lugar de eliminar"""
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        
        return Response({
            'message': 'Usuario desactivado exitosamente'
        }, status=status.HTTP_204_NO_CONTENT)
    
    @action(detail=True, methods=['get'])
    def perfil(self, request, pk=None):
        """Obtener perfil público del usuario"""
        usuario = self.get_object()
        serializer = UsuarioPerfilSerializer(usuario)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def activar(self, request, pk=None):
        """Activar usuario"""
        usuario = self.get_object()
        usuario.is_active = True
        usuario.save()
        
        return Response({
            'message': 'Usuario activado exitosamente'
        })
    
    @action(detail=True, methods=['post'])
    def desactivar(self, request, pk=None):
        """Desactivar usuario"""
        usuario = self.get_object()
        usuario.is_active = False
        usuario.save()
        
        return Response({
            'message': 'Usuario desactivado exitosamente'
        })
    
    @action(detail=True, methods=['post'])
    def cambiar_password(self, request, pk=None):
        """Cambiar contraseña del usuario"""
        usuario = self.get_object()
        password_actual = request.data.get('password_actual')
        password_nueva = request.data.get('password_nueva')
        password_confirm = request.data.get('password_confirm')
        
        if not all([password_actual, password_nueva, password_confirm]):
            return Response({
                'error': 'Todos los campos son requeridos'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        if not usuario.check_password(password_actual):
            return Response({
                'error': 'Contraseña actual incorrecta'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        if password_nueva != password_confirm:
            return Response({
                'error': 'Las contraseñas nuevas no coinciden'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        usuario.set_password(password_nueva)
        usuario.save()
        
        return Response({
            'message': 'Contraseña cambiada exitosamente'
        })
    
    @action(detail=False, methods=['get'])
    def estadisticas(self, request):
        """Obtener estadísticas de usuarios"""
        total_usuarios = Usuario.objects.count()
        usuarios_activos = Usuario.objects.filter(is_active=True).count()
        usuarios_verificados = Usuario.objects.filter(esta_verificado=True).count()
        
        return Response({
            'total_usuarios': total_usuarios,
            'usuarios_activos': usuarios_activos,
            'usuarios_inactivos': total_usuarios - usuarios_activos,
            'usuarios_verificados': usuarios_verificados,
            'usuarios_no_verificados': total_usuarios - usuarios_verificados
        })
    
    @action(detail=False, methods=['post'])
    def reset_password(self, request):
        """Restablecer contraseña sin autenticación"""
        email = request.data.get('email')
        password = request.data.get('password')
        password_confirm = request.data.get('password_confirm')

        if not all([email, password, password_confirm]):
            return Response({'error': 'Todos los campos son requeridos'}, status=status.HTTP_400_BAD_REQUEST)

        if password != password_confirm:
            return Response({'error': 'Las contraseñas no coinciden'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            validate_password(password)
        except ValidationError as e:
            return Response({'error': e.messages}, status=status.HTTP_400_BAD_REQUEST)

        try:
            usuario = Usuario.objects.get(email=email)
            usuario.set_password(password)
            usuario.save()
            return Response({'message': 'Contraseña actualizada correctamente'}, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response({'error': 'No existe una cuenta con ese correo'}, status=status.HTTP_404_NOT_FOUND)