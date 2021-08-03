from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from MetodoApp.models import Metodos, Anticoncepcion
from MetodoApp.serializers import MetodoSerializer, AnticoncepcionSerializer

# Create your views here.
@csrf_exempt
def metodoApi(request, id=0):
    if request.method=='GET':
        metodos = Metodos.objects.all()
        metodos_serializer = MetodoSerializer(metodos, many=True)
        return JsonResponse(metodos_serializer.data, safe=False)
    elif request.method=='POST':
        metodo_data = JSONParser().parse(request)
        metodo_serializer = MetodoSerializer(data=metodo_data)
        if metodo_serializer.is_valid():
            metodo_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method=='PUT':
        metodo_data = JSONParser().parse(request)
        metodo = Metodos.objects.get(MetodoId = metodo_data['MetodoId'])
        metodo_serializer = MetodoSerializer(metodo, data=metodo_data)
        if metodo_serializer.is_valid():
            metodo_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        metodo = Metodos.objects.get(MetodoId=id)
        metodo.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)

@csrf_exempt
def anticoncepcionApi(request, id=0):
    if request.method=='GET':
        anticoncepciones = Anticoncepcion.objects.all()
        anticoncepcion_serializer = AnticoncepcionSerializer(anticoncepciones, many=True)
        return JsonResponse(anticoncepcion_serializer.data, safe=False)
    elif request.method=='POST':
        anticoncepcion_data = JSONParser().parse(request)
        anticoncepcion_serializer = AnticoncepcionSerializer(data=anticoncepcion_data)
        if anticoncepcion_serializer.is_valid():
            anticoncepcion_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method=='PUT':
        anticoncepcion_data = JSONParser().parse(request)
        anticoncepcion = Anticoncepcion.objects.get(AnticoncepcionID = anticoncepcion_data['AnticoncepcionID'])
        anticoncepcion_serializer = AnticoncepcionSerializer(anticoncepcion, data=anticoncepcion_data)
        if anticoncepcion_serializer.is_valid():
            anticoncepcion_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        anticoncepcion = Anticoncepcion.objects.get(AnticoncepcionID=id)
        anti.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)

        