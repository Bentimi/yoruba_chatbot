from django.urls import path
from . import views

urlpatterns = [
    path('chatbot_response', views.response, name="chatbot_response"),
    path('', views.chatbot_response, name='chatbot_response'),
]