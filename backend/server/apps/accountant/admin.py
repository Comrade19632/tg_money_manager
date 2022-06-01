from django.contrib import admin

from .models import Category, Transaction


admin.site.register(Transaction)
admin.site.register(Category)
