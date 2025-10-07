from django.contrib import admin
from cart.models import CartItemModel, CartModel
# Register your models here.


class CartModelAdmin(admin.ModelAdmin):
    model = CartModel
    list_display = ["id", "user", "created_at", "updated_at", "is_active"]
    readonly_fields = ["id", "created_at", "updated_at"]
    list_filter = ["user", "is_active"]


class CartItemModelAdmin(admin.ModelAdmin):
    model = CartItemModel
    list_display = ["cart", "item", "quantity", "added_at"]
    readonly_fields = ["added_at"]
    list_filter = ["item", ]


admin.site.register(CartModel, CartModelAdmin)
admin.site.register(CartItemModel, CartItemModelAdmin)
