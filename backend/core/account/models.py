from django.db import models
from django.contrib.auth.models import User
import uuid
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.


class ProfileModel(models.Model):
    id = models.ForeignKey(User, on_delete=models.CASCADE)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4)
    phone_number = PhoneNumberField(
        region="IR", unique=True, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    postal_code = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.id.username

    # def create(self, validated_data):

    class Meta:
        verbose_name = 'Profile'
