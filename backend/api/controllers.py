#from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import *
from django.contrib.auth import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
#from django.shortcuts import render_to_response
from django.template import RequestContext
from django_filters.rest_framework import DjangoFilterBackend


from django.shortcuts import *

# Import models
from django.db import models
from django.contrib.auth.models import *
from api.models import *

#REST API
from rest_framework import viewsets, filters, parsers, renderers
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.serializers import GroupSerializer, GameSerializer, PlayerProfileSerializer

from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import *
from rest_framework.decorators import *
from rest_framework.authentication import *

#filters
#from filters.mixins import *

from api.pagination import *
import json, datetime, pytz
from django.core import serializers
import requests


def home(request):
   """
   Send requests to / to the ember.js clientside app
   """
   return render_to_response('ember/index.html',
               {}, RequestContext(request))

def xss_example(request):
  """
  Send requests to xss-example/ to the insecure client app
  """
  return render_to_response('dumb-test-app/index.html',
              {}, RequestContext(request))

class Register(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        # Login
        #serializer = PlayerProfileSerializer(request.data)
        username = request.data['username'] #you need to apply validators to these
        print request.data
        print username
        password = request.data['password'] #you need to apply validators to these
        email = request.data['email'] #you need to apply validators to these
        name = request.data['name']#you need to apply validators to these
        age = request.data['age'] #you need to apply validators to these
        experience = request.data['experience'] #you need to apply validators to these
        level = request.data['level'] #you need to apply validators to these

        # request.POST.get('username')
        if User.objects.filter(username=username).exists():
            return Response({'username': 'Username is taken.', 'status': 'error'})
        elif User.objects.filter(email=email).exists():
            return Response({'email': 'Email is taken.', 'status': 'error'})

        #especially before you pass them in here
        newuser = User.objects.create_user(email=email, username=username, password=password)
        newuser.save()
        newprofile = PlayerProfile(user=newuser, name=name, age=age, experience=experience, level=level)
        newprofile.save()

        return Response({'status': 'success', 'userid': newuser.id, 'profile': newprofile.id})

class Session(APIView):
    permission_classes = (AllowAny,)
    def form_response(self, isauthenticated, userid, username, error=""):
        data = {
            'isauthenticated': isauthenticated,
            'userid': userid,
            'username': username
        }
        if error:
            data['message'] = error

        return Response(data)

    def get(self, request, *args, **kwargs):
        # Get the current user
        if request.user.is_authenticated():
            return self.form_response(True, request.user.id, request.user.username)
        return self.form_response(False, None, None)

    def post(self, request, *args, **kwargs):
        # Login
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return self.form_response(True, user.id, user.username)
            return self.form_response(False, None, None, "Account is suspended")
        return self.form_response(False, None, None, "Invalid username or password")

    def delete(self, request, *args, **kwargs):
        # Logout
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)

class PlayerJoinGroup(APIView):
    def put(self, request, format=None):
        group = Group.objects.get(pk=request.data['groupid'])
        player = PlayerProfile.objects.get(user=request.data['playerid'])
        print player
        group.players.add(player)
        serializer = GroupSerializer(player.group_set.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        #return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlayerLeaveGroup(APIView):
    def put(self, request, format=None):
        group = Group.objects.get(pk=request.data['groupid'])
        player = PlayerProfile.objects.get(user=request.data['playerid'])
        group.players.remove(player)
        serializer = GroupSerializer(player.group_set.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PlayerJoinGame(APIView):
    def put(self, request, format=None):
        game = Game.objects.get(pk=request.data['gameid'])
        player = PlayerProfile.objects.get(user=request.data['playerid'])
        game.participants.add(player)
        serializer = GameSerializer(player.game_set.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PlayerLeaveGame(APIView):
    def put(self, request, format=None):
        game = Game.objects.get(pk=request.data['gameid'])
        player = PlayerProfile.objects.get(user=request.data['playerid'])
        game.participants.remove(player)
        serializer = GameSerializer(player.game_set.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PlayerDetail(APIView):
    permission_classes = (AllowAny,)
    def get(self, request, pk, format=None):
        try:
            player = PlayerProfile.objects.get(pk=pk)
            serializer = PlayerProfileSerializer(player)
            return Response(serializer.data)
        except PlayerProfile.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        try:
            player = PlayerProfile.objects.get(pk=pk)
            serializer = PlayerProfileSerializer(player, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except PlayerProfile.DoesNotExist:
            raise Http404

    def delete(self, request, pk, format=None):
        try:
            player = PlayerProfile.objects.get(pk=pk)
            player.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except PlayerProfile.DoesNotExist:
            raise Http404

class PlayerList(APIView):
    def get(self, request, format=None):
      players = PlayerProfile.objects.all()
      serializer = PlayerProfileSerializer(players, many=True)
      return Response(serializer.data)

    def post(self, request, format=None):
      serializer = PlayerProfileSerializer(data=request.data)
      if serializer.is_valid():
         serializer.save()
         return Response(serializer.data, status=status.HTTP_201_CREATED)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GroupDetail(APIView):
    permission_classes = (AllowAny,)
    def get(self, request, pk, format=None):
        try:
            group = Group.objects.get(pk=pk)
            serializer = GroupSerializer(group)
            return Response(serializer.data)
        except PlayerProfile.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        try:
            group = Group.objects.get(pk=pk)
            serializer = GroupSerializer(group, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except PlayerProfile.DoesNotExist:
            raise Http404

    def delete(self, request, pk, format=None):
        try:
            group = Group.objects.get(pk=pk)
            group.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except PlayerProfile.DoesNotExist:
            raise Http404

class GroupList(APIView):
    # permission_classes = (AllowAny,)
    # parser_classes = (parsers.JSONParser,parsers.FormParser)
    # renderer_classes = (renderers.JSONRenderer, )
    def get(self, request, format=None):
        group = Group.objects.all()
        serializer = GroupSerializer(group, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = GroupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GameDetail(APIView):
    permission_classes = (AllowAny,)
    def get(self, request, pk, format=None):
        try:
            game = Game.objects.get(pk=pk)
            serializer = GameSerializer(game)
            return Response(serializer.data)
        except Group.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        try:
            game = Game.objects.get(pk=pk)
            serializer = GameSerializer(game, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Group.DoesNotExist:
            raise Http404

    def delete(self, request, pk, format=None):
        try:
            game = Game.objects.get(pk=pk)
            game.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Group.DoesNotExist:
            raise Http404

class GameList(APIView):
   def get(self, request, format=None):
      game = Game.objects.all()
      serializer = GameSerializer(game, many=True)
      return Response(serializer.data)

   def post(self, request, format=None):
      serializer = GameSerializer(data=request.data)
      print request.data
      if serializer.is_valid():
         serializer.save()
         return Response(serializer.data, status=status.HTTP_201_CREATED)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class Events(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

class ActivateIFTTT(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (parsers.JSONParser,parsers.FormParser)
    renderer_classes = (renderers.JSONRenderer, )

    def post(self,request):
        print 'REQUEST DATA'
        print str(request.data)

        eventtype = request.data.get('eventtype')
        timestamp = int(request.data.get('timestamp'))
        requestor = request.META['REMOTE_ADDR']
        api_key = ApiKey.objects.all().first()
        event_hook = "test"

        print "Creating New event"

        newEvent = Event(
            eventtype=eventtype,
            timestamp=datetime.datetime.fromtimestamp(timestamp/1000, pytz.utc),
            userid=str(api_key.owner),
            requestor=requestor
        )

        print newEvent
        print "Sending Device Event to IFTTT hook: " + str(event_hook)

        #send the new event to IFTTT and  the result
        event_req = requests.post('https://maker.ifttt.com/trigger/'+str(event_hook)+'/with/key/'+api_key.key, data= {
            'value1' : timestamp,
            'value2':  "\""+str(eventtype)+"\"",
            'value3' : "\""+str(requestor)+"\""
        })
        print event_req.text

        #check that the event is safe to store in the databse
        try:
            newEvent.clean_fields()
        except ValidationError as e:
            print e
            return Response({'success':False, 'error':e}, status=status.HTTP_400_BAD_REQUEST)

        #log the event in the DB
        newEvent.save()
        print 'New Event Logged'
        return Response({'success': True}, status=status.HTTP_200_OK)
