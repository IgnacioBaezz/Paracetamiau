from django.db import models
from usuarios.models import Usuario

MOMENTOS = (
    ("manana", "Manana"),
    ("tarde", "Tarde"),
    ("noche", "Noche"),
)

EMOCIONES = (
    ("feliz", "Feliz"),
    ("calma", "Calma"),
    ("neutral", "Neutral"),
    ("triste", "Triste"),
    ("ansioso", "Ansioso"),
    ("enojado", "Enojado"),
)

class EstadoAnimo(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    emocion = models.CharField(max_length=20, choices=EMOCIONES)
    nota = models.TextField(blank=True)
    momento = models.CharField(max_length=10, choices=MOMENTOS)
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("usuario", "fecha", "momento")
        indexes = [
            models.Index(fields=["usuario", "fecha"]),
        ]


    def __str__(self):
        return f"{self.usuario.username} - {self.emocion} ({self.momento}) - {self.fecha}"
