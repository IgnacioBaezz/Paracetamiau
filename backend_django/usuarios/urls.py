from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet

router = DefaultRouter()
router.register("", UsuarioViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

# Las URLs generadas automáticamente serán:
# GET    /api/usuarios/                       - Listar usuarios
# POST   /api/usuarios/                       - Crear usuario  
# GET    /api/usuarios/{id}/                  - Detalle usuario
# PUT    /api/usuarios/{id}/                  - Actualizar usuario completo
# PATCH  /api/usuarios/{id}/                  - Actualizar usuario parcial
# DELETE /api/usuarios/{id}/                  - Desactivar usuario
# GET    /api/usuarios/{id}/perfil/           - Perfil público
# POST   /api/usuarios/{id}/cambiar_password/ - Cambiar contraseña
# GET    /api/usuarios/estadisticas/          - Estadísticas
# GET    /api/usuarios/{id}/mi_perfil/        - Mi perfil completo