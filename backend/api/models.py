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

class Profile(models.Model):
    name = models.CharField(max_length=5000, blank=False)
    age = models.IntegerField()
    experience = models.CharField(max_length = 5000, blank=False)
    STYLE = (
        ('Serious Players Only','Serious Players Only'),
        ('Play Hard, not Hurt','Play Hard, not Hurt'),
        ('Just Having Fun','Just Having Fun'),
    )
    level = models.CharField(max_length=5000, choices=STYLE)
    

class Group(models.Model):
    name = models.CharField(max_length=5000, blank=False)
    players = models.ForeignKey(Profile, on_delete=models.CASCADE)
    
class Game(models.Model):
    sport = models.CharField(max_length=5000, blank=False)
    location = models.CharField(max_length=5000, blank=False)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    
    
    
