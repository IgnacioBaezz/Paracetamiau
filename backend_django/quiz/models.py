from django.db import models
from usuarios.models import Usuario

NIVELES_DIFICULTAD = (
    ("facil", "Fácil"),
    ("intermedio", "Intermedio"),
    ("dificil", "Difícil"),
)

TIPO_RESPUESTA = (
    ("seleccion_multiple", "Selección Múltiple"),
    ("verdadero_falso", "Verdadero o Falso"),
)

CATEGORIAS = (
    ("rcp", "RCP"),
    ("convulsiones", "Convulsiones"),
    ("fracturas", "Fracturas"),
    ("quemaduras", "Quemaduras"),
    ("shock", "Shock anafiláctico"),
    ("hemorragias", "Hemorragias"),
    ("desmayos", "Desmayos"),
    ("atragantamiento", "Atragantamiento"),
)

class Pregunta(models.Model):
    texto = models.CharField(max_length=255)
    tipo = models.CharField(max_length=20, choices=TIPO_RESPUESTA, default="seleccion_multiple")
    nivel = models.CharField(max_length=15, choices=NIVELES_DIFICULTAD)
    categoria = models.CharField(max_length=30, choices=CATEGORIAS)

    def __str__(self):
        return f"{self.texto} ({self.get_nivel_display()} - {self.get_categoria_display()})"

class OpcionRespuesta(models.Model):
    pregunta = models.ForeignKey(Pregunta, related_name="opciones", on_delete=models.CASCADE)
    texto = models.CharField(max_length=255)
    valor = models.IntegerField(default=0)
    es_correcta= models.BooleanField(default=False)

    def __str__(self):
        return f"{self.texto} (Valor: {self.valor})"

class RespuestaUsuario(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    pregunta = models.ForeignKey(Pregunta, on_delete=models.CASCADE)
    opcion_seleccionada = models.ForeignKey(OpcionRespuesta, on_delete=models.CASCADE)
    fecha = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.usuario.username} - {self.pregunta.texto} - {self.opcion_seleccionada.texto}"
