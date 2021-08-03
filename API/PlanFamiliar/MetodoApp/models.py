from django.db import models

# Create your models here.
class Metodos(models.Model):
    MetodoId = models.AutoField(primary_key=True)
    MetodoNombre = models.CharField(max_length=256)
    MetodoDescripcion = models.CharField(max_length=515)
    MetodoMecanismo = models.CharField(max_length=512)
    MetodoImagen = models.CharField(max_length=128)

class Anticoncepcion(models.Model):
    AnticoncepcionID = models.AutoField(primary_key=True)
    AnticoncepcionMes = models.CharField(max_length=100)
    AnticoncepcionDepartamento = models.CharField(max_length=100)
    AnticoncepcionProvincia = models.CharField(max_length=256)
    AnticoncepcionDistrito = models.CharField(max_length=256)
    AnticoncepcionEdad = models.CharField(max_length=20)
    AnticoncepcionMetodo = models.CharField(max_length=50)