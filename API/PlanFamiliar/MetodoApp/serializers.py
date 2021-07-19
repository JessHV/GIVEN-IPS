from rest_framework import serializers
from MetodoApp.models import Metodos

class MetodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metodos
        fields = ('MetodoId',
                  'MetodoNombre',
                  'MetodoDescripcion',
                  'MetodoMecanismo',
                  'MetodoImagen')