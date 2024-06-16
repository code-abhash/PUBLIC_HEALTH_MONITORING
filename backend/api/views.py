from django.shortcuts import render
from api.models import Profile, User, Patient
from api.serializers import UserSerializer, MyTokenObtainPairSerializer, RegisterSerializer, PatientSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response




# Create your views here


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset=User.objects.all()
    permission_classes=([AllowAny])
    serializer_class=RegisterSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
        '/api/patientslist'
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method=="GET":
        response = f"Hey {request.User}, You are seeing a GET response"
        return Response({'response':response}, status=status.HTTP_200_ok)
    
    elif request.method == 'POST':
        text = response.POST.get("text")
        response = f"Hey{request.user}, Your text is {text}"
        return Response({'response': response}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


class PatientlistView(generics.CreateAPIView):
    queryset=Patient.objects.all()
    permission_classes=([AllowAny])
    serializer_class=PatientSerializer


@api_view(['GET','POST'])
def patientslist(request):
    if request.method== 'GET':
        patients=Patient.objects.all()
        serializer = PatientSerializer(patients, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    