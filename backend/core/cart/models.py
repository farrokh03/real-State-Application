from django.db import models
from item.models import ItemModel
from django.contrib.auth.models import User
import uuid
# Create your models here.


class CartModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="carts")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"Cart {self.id} for {self.user.username}"

    def total_price(self):
        return sum(item.total_price for item in self.items.all())

    class Meta:
        verbose_name = "cart"


class CartItemModel(models.Model):
    cart = models.ForeignKey(
        CartModel, on_delete=models.CASCADE, related_name="items")
    item = models.ForeignKey(ItemModel, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} * {self.item.name}"

    def total_price(self):
        return self.quantity * self.item.price

    class Meta:
        verbose_name = "Cart Item"
