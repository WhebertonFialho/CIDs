from rest_framework.viewsets import ModelViewSet
from cid.models import CID
from .serializers import CIDSerializer

class CIDViewSet(ModelViewSet):
    queryset = CID.objects.all()
    serializer_class = CIDSerializer
    filterset_fields = ['id', 'descricao', 'grupo']