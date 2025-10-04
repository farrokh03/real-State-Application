from django.db import models
import uuid
# Create your models here.


class CategoryModel(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

    def create(self, validated_data):
        return CategoryModel.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get(
            "description", instance.description)
        instance.save()
        return instance


class ItemModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    price = models.IntegerField()
    stock = models.IntegerField()
    category = models.ForeignKey(
        CategoryModel, related_name="items", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def create(self, validated_data):
        return ItemModel.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.id = validated_data.get("id", instance.id)
        instance.name = validated_data.get("name", instance.id)
        instance.description = validated_data.get(
            "description", instance.description)
        instance.created_at = validated_data.get("created_at")
        instance.created_at = validated_data.get(
            "created_at", instance.created_at)
        instance.updated_at = validated_data.get(
            "updated_at", instance.updated_at)
        instance.price = validated_data.get("price", instance.price)
        instance.stock = validated_data.get("stock", instance.stock)
        instance.save()
        return instance

    class Meta:
        ordering = ["created_at"]
        verbose_name = "Item"
        verbose_name_plural = "Items"


class ItemAttributesModel(models.Model):
    item = models.ForeignKey(
        ItemModel, related_name="attributes", on_delete=models.CASCADE)
    key = models.CharField(max_length=100)
    value = models.CharField(max_length=200)

    def __str__(self):
        return self.key

    def create(self, validated_data):
        return ItemAttributesModel.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.item = validated_data.get("item", instance.item)
        instance.key = validated_data.get("key", instance.key)
        instance.value = validated_data.get("value", instance.value)

        instance.save()
        return instance
