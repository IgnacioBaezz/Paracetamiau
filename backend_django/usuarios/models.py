from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    recibir_mensajes = models.BooleanField(default=True)

    class Meta():
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

    def __str__(self):
        return self.username
    
    def obtener_nombre_completo(self):
        return f"{self.first_name} {self.last_name}"