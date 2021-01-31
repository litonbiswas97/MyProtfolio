from django.db import models

# Create your models here.
class contact(models.Model):
    name=models.CharField(max_length=150)
    email=models.CharField(max_length=100)
    subject=models.TextField()
    message=models.TextField()

    def __str__(self):
        return self.name