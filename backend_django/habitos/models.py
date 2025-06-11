from django.db import models
from usuarios.models import Usuario

class OpcionHabito(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)

    def __str__(self):
        return self.nombre

class SeleccionHabitoDiario(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    habito = models.ForeignKey(OpcionHabito, on_delete=models.CASCADE)
    fecha = models.DateField(auto_now_add=True)
    cumplido = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.usuario.username} - {self.habito.nombre} - {self.fecha}"
