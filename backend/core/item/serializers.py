from rest_framework import serializers
from .models import ItemModel, ItemAttributesModel, CategoryModel


class ItemAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemAttributesModel
        fields = ["key", "value"]


class CategorySerializer(serializers.ModelSerializer):
    model = CategoryModel
    fields = ["name", "description"]


class ItemSerializer(serializers.ModelSerializer):
    attributes = ItemAttributeSerializer(many=True,read_only=True)
    read_only_fields = ["attributes"]
    class Meta:
        model = ItemModel
        fields = ["url", "id", "name", "description", "created_at",
                  "updated_at", "category", "price", "stock", "attributes"]

        read_only_fields = ["id", "attributes"]
