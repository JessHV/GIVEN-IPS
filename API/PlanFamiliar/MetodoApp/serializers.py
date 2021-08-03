from rest_framework import serializers
from MetodoApp.models import Metodos, Anticoncepcion

class MetodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metodos
        fields = ('MetodoId',
                  'MetodoNombre',
                  'MetodoDescripcion',
                  'MetodoMecanismo',
                  'MetodoImagen')

class AnticoncepcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anticoncepcion
        fields = ('AnticoncepcionID',
                  'AnticoncepcionMes',
                  'AnticoncepcionDepartamento',
                  'AnticoncepcionProvincia',
                  'AnticoncepcionDistrito',
                  'AnticoncepcionEdad',
                  'AnticoncepcionMetodo')