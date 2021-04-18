from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from grupo_cid.models import GrupoCID
from .serializers import GrupoCIDSerializer

class GrupoCIDViewSet(ModelViewSet):
    queryset = GrupoCID.objects.all()
    serializer_class = GrupoCIDSerializer
    filter_backends = (SearchFilter, )
    search_fields = ['id', 'descricao']