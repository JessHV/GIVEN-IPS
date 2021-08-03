from django.conf.urls import url
from MetodoApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^metodo/$', views.metodoApi),
    url(r'^metodo/([0-9]+)$', views.metodoApi),
    url(r'^anticoncepcion/$', views.anticoncepcionApi),
    url(r'^anticoncepcion/([0-9]+)$', views.anticoncepcionApi)
] 
