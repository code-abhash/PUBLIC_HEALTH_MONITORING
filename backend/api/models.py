#importing Abstract user to add extra fields
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class User(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email=models.EmailField(unique=True)
    role=models.CharField(max_length=100)
    
    

    def __str__(self):
        return self.role
    

class Profile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)

    
    verified=models.BooleanField(default=False)

    def __str__(self):
        return f'Profile for {self.user.username}'

    
@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, verified=False)  # Initialize with verified=False
    instance.profile.save()