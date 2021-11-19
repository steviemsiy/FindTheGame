from __future__ import unicode_literals

from django.db import models
from django.core.validators import *

from django.contrib.auth.models import User, Group

from django.contrib import admin
import base64

class Event(models.Model):
    eventtype = models.CharField(max_length=1000, blank=False)
    timestamp = models.DateTimeField()
    userid = models.CharField(max_length=1000, blank=True)
    requestor = models.GenericIPAddressField(blank=False)

    def __str__(self):
        return str(self.eventtype)

class EventAdmin(admin.ModelAdmin):
    list_display = ('eventtype', 'timestamp')

class ApiKey(models.Model):
    owner = models.CharField(max_length=1000, blank=False)
    key = models.CharField(max_length=5000, blank=False)

    def __str__(self):
        return str(self.owner) + str(self.key)

class ApiKeyAdmin(admin.ModelAdmin):
    list_display = ('owner','key')

class Plant(models.Model):
    name = models.CharField(max_length=5000, blank=False)
    age = models.IntegerField()
    species = models.ForeignKey('Plant', on_delete=models.CASCADE)
    

class Species(models.Model):
    SIZES = (
        ('Tiny','Tiny'),
        ('Small','Small'),
        ('Medium','Medium'),
        ('Large','Large'),
    )
    name = models.CharField(max_length=5000, blank=False)
    size = models.CharField(max_length=5000, choices=SIZES)
    water_requirement = models.IntegerField(default = '1',validators=[MinValueValidator(1), MaxValueValidator(1000)])
    Humidity = models.IntegerField(default = '1',validators=[MinValueValidator(0), MaxValueValidator(100)])
    Harvest_age = models.IntegerField(default = '1', validators=[MinValueValidator(1), MaxValueValidator(10)])
    nutrient_amount = models.IntegerField(default = '1',validators=[MinValueValidator(1), MaxValueValidator(10)])
    tempurature = models.IntegerField(default = '33',validators=[MinValueValidator(33), MaxValueValidator(100)])
