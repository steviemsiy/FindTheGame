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
        #fields = ['id', 'description', 'name', 'players']

class GameSerializer(serializers.ModelSerializer):

    participants = PlayerProfileSerializer(read_only=True, many=True)
    #group = GroupSerializer(read_only=True)
    class Meta:
        model = Game
        fields = '__all__'
        #fields = ['name', 'description', 'id', 'sport', 'location', 'date', 'group', 'participants']
