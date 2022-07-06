from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.viewsets import ModelViewSet

from ..models import User
from ..serializers import UserSerializer


class UsersViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

    @action(
        detail=False,
        methods=["GET"],
        permission_classes=[IsAuthenticated],
        url_name="get-self",
        url_path="get-self",
    )
    def get_self(self, request):
        data = UserSerializer(request.user).data

        return Response(status=HTTP_200_OK, data=data)
