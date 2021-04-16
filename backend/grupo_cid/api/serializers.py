from rest_framework.serializers import ModelSerializer
from grupo_cid.models import GrupoCID

class GrupoCIDSerializer(ModelSerializer):
    class Meta:
        model = GrupoCID
        fields = ['id', 'descricao']