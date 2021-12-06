from rest_framework import serializers
#from api.models import Profile
from api.models import PlayerProfile
from api.models import Group
from api.models import Game

#class ProfileSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Profile
#        fields = '__all__'

class PlayerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerProfile
        fields = '__all__'

class GroupSerializer(serializers.ModelSerializer):
    players = PlayerProfileSerializer(read_only=True, many=True)
    class Meta:
        model = Group
        fields = '__all__'

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'
