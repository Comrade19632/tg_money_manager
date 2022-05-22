from rest_framework_simplejwt.views import TokenObtainPairView

from apps.users.serializers import TokenObtainPairSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    # Replace the serializer with your custom
    serializer_class = TokenObtainPairSerializer
