from django.contrib.auth import admin
from django.urls import path, include
from .import views
urlpatterns = [
path('', views.index,name='index'),
]