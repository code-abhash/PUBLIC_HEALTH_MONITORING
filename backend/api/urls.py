from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from api import views


urlpatterns = [
    
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('dashboard/', views.dashboard),
    path('patientslist/', views.patientslist, name='patient_list'),
    path('patientslistview/', views.PatientlistView.as_view(), name='patients_list_view'),
    path('', views.getRoutes),
    
]