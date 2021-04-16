from django.db import models

class GrupoCID(models.Model):
    id = models.CharField(max_length=3, primary_key=True)
    descricao = models.CharField(max_length=200)
    
    def __str__(self):
        return self.descricao
    
    class Meta:
        verbose_name = 'Grupo CID'
        verbose_name_plural = 'Grupos CID'
        db_table = 'tab_grupo_cid'
        