from rest_framework import serializers
from cart.models import CartModel, CartItemModel


class CartItemSerializer(serializers.ModelSerializer):

    name = serializers.CharField(source='item.name', read_only=True)
    item_price = serializers.IntegerField(source='item.price', read_only=True)

    class Meta:
        model = CartItemModel
        fields = ['name', 'item_price', 'quantity', 'added_at']
        read_only_fields = ['id', 'added_at']


class CartSerializer(serializers.ModelSerializer):

    items = CartItemSerializer(many=True, read_only=True)
    total = serializers.SerializerMethodField()

    class Meta:
        model = CartModel
        fields = ['url', "id", 'user', 'created_at',
                  'updated_at', "items", "total"]
        read_only_fields = ["id", 'created_at', 'updated_at', 'total']

    def get_total(self, obj):
        return sum(item.item.price * item.quantity for item in obj.items.all())
