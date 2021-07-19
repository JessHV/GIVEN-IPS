from django.db import models

# Create your models here.
class Metodos(models.Model):
    MetodoId = models.AutoField(primary_key=True)
    MetodoNombre = models.CharField(max_length=256)
    MetodoDescripcion = models.CharField(max_length=515)
    MetodoMecanismo = models.CharField(max_length=512)
    MetodoImagen = models.CharField(max_length=128)