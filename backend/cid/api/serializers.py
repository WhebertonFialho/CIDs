from rest_framework.serializers import ModelSerializer
from grupo_cid.api.serializers import GrupoCIDSerializer
from cid.models import CID

class CIDSerializer(ModelSerializer):
    grupo = GrupoCIDSerializer()

    class Meta:
        model = CID
        fields = ['id', 'descricao', 'grupo']       