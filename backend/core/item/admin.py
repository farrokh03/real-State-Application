from django.contrib import admin
from .models import ItemModel, ItemAttributesModel, CategoryModel
# Register your models here.


class ItemAdminModel(admin.ModelAdmin):
    model = ItemModel
    fields = [
        field.name for field in ItemModel._meta.fields if field.editable and field.name != "id"]
    list_filter = ["name", "category"]


class ItemAttributesAdminModel(admin.ModelAdmin):
    model = ItemAttributesModel
    fields = ['item', 'key', 'value']
    list_filter = ['item']

# field.name for field in CategoryModel._meta.fields if field.editable


class CategoryAdminModel(admin.ModelAdmin):
    model = CategoryModel
    fields = ['name', 'description']
    list_filter = ["name", ]


admin.site.register(ItemModel, ItemAdminModel)
admin.site.register(ItemAttributesModel, ItemAttributesAdminModel)
admin.site.register(CategoryModel, CategoryAdminModel)
