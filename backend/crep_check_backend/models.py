from djongo import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField()
    date = models.DateField(auto_now_add=True)
