from rest_framework.viewsets import ModelViewSet
from grupo_cid.models import GrupoCID
from .serializers import GrupoCIDSerializer

class GrupoCIDViewSet(ModelViewSet):
    queryset = GrupoCID.objects.all()
    serializer_class = GrupoCIDSerializer
    filterset_fields = ['id', 'descricao']