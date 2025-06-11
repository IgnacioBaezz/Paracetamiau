from django.db import models
from usuarios.models import Usuario

MOMENTOS = (
    ("mañana", "Mañana"),
    ("tarde", "Tarde"),
    ("noche", "Noche"),
)

EMOCIONES = (
    ("feliz", "Feliz"),
    ("triste", "Triste"),
    ("estresado", "Estresado"),
    ("motivado", "Motivado"),
    ("cansado", "Cansado"),
    ("agradecido", "Agradecido"),
)

class EntradaEmocional(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    emocion = models.CharField(max_length=20, choices=EMOCIONES)
    nota = models.TextField(blank=True)
    gratitud = models.TextField(blank=True)
    momento = models.CharField(max_length=10, choices=MOMENTOS)
    fecha = models.DateField(auto_now_add=True)
    creado_en = models.DateTimeField(auto_now_add=True)
    actualizado_en = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.usuario.username} - {self.emocion} - {self.fecha}"
