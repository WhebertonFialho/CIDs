from django.db import models
from grupo_cid.models import GrupoCID

class CID(models.Model):
    id = models.CharField(max_length=6, primary_key=True)
    descricao = models.TextField()
    grupo = models.ForeignKey(GrupoCID, on_delete=models.DO_NOTHING)
    
    def __str__(self):
        return self.descricao
    
    class Meta:
        verbose_name = 'CID'
        verbose_name_plural = 'CIDs'
        db_table = 'tab_cid' 