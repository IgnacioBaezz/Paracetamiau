from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import RegexValidator
from django.utils import timezone
from datetime import timedelta


class UsuarioManager(models.Manager):
    def verificados(self):
        return self.filter(esta_verificado=True)

    def activos_recientes(self):
        hace_7_dias = timezone.now() - timedelta(days=7)
        return self.filter(ultimo_acceso__gte=hace_7_dias)


class Usuario(AbstractUser):
    """
    Usuario personalizado que hereda del usuario de Django para integrar de manera perfecta todas las funcionalidades de manera "nativa"
    """
    # Manager
    objects = UsuarioManager()

    # email como campo principal de validación
    email = models.EmailField(unique=True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    
    # Campos adicionales
    telefono = models.CharField(
        max_length=15, 
        blank=True, 
        null=True,
        validators=[RegexValidator(
            regex=r'^\+?56?\d{9}$',
            message="El teléfono debe tener entre 9 y 15 dígitos."
        )]
    )
    fecha_nacimiento = models.DateField(blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    biografia = models.TextField(max_length=500, blank=True)
    recibir_mensajes = models.BooleanField(default=True)
    recibir_notificaciones = models.BooleanField(default=True)
    ubicacion = models.CharField(max_length=100, blank=True)
    
    # Campos de auditoría
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    ultimo_acceso = models.DateTimeField(blank=True, null=True)
    
    # Campos de estado
    esta_verificado = models.BooleanField(default=False)
    esta_suspendido = models.BooleanField(default=False)
    
    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"
        ordering = ['-fecha_creacion']

    def __str__(self):
        return self.username
    
    def delete(self, *args, **kwargs):
        self.is_active = False
        self.save(update_fields=["is_active"])

    
    def obtener_nombre_completo(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}".strip()
        return self.username
    
    def obtener_iniciales(self):
        if self.first_name and self.last_name:
            return f"{self.first_name[0]}{self.last_name[0]}".upper()
        return self.username[:2].upper()
    
    def actualizar_ultimo_acceso(self):
        self.ultimo_acceso = timezone.now()
        self.save(update_fields=['ultimo_acceso'])
    
    @property
    def nombre_display(self):
        return self.obtener_nombre_completo()
    
    @property
    def esta_activo_recientemente(self):
        if not self.ultimo_acceso:
            return False
        return (timezone.now() - self.ultimo_acceso).days < 7