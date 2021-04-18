from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from cid.models import CID
from .serializers import CIDSerializer

class CIDViewSet(ModelViewSet):
    queryset = CID.objects.all()
    serializer_class = CIDSerializer
    filter_backends = (SearchFilter, )
    search_fields = ['id', 'descricao'] #'grupo__id', 'grupo_id'