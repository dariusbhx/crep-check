from djongo import Models

# Create your models here.


class Post(Models.Model):
    title = Models.CharField(max_length=120)
    description = Models.TextField()
    price = Models.DecimalField(max_digits=6, decimal_places=1)
    image = Models.ImageField()
