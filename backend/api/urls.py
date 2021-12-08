from django.conf.urls import include, url

#Django Rest Framework
from rest_framework import routers

from api import controllers
from django.views.decorators.csrf import csrf_exempt

#REST API routes
router = routers.DefaultRouter(trailing_slash=False)

urlpatterns = [
    url(r'^session', csrf_exempt(controllers.Session.as_view())),
    url(r'^register', csrf_exempt(controllers.Register.as_view())),
    url(r'^events', csrf_exempt(controllers.Events.as_view())),
    url(r'^activateifttt', csrf_exempt(controllers.ActivateIFTTT.as_view())),
    url(r'^groups/(?P<pk>\d+)/', csrf_exempt(controllers.GroupDetail.as_view())),
    url(r'^groups/', csrf_exempt(controllers.GroupList.as_view())),
    url(r'^players/(?P<pk>\d+)/', csrf_exempt(controllers.PlayerDetail.as_view())),
    url(r'^players/', csrf_exempt(controllers.PlayerList.as_view())),
    url(r'^games/(?P<pk>\d+)/', csrf_exempt(controllers.GameDetail.as_view())),
    url(r'^games/', csrf_exempt(controllers.GameList.as_view())),
    url(r'^joingroup/', csrf_exempt(controllers.PlayerJoinGroup.as_view())),
    url(r'^leavegroup/', csrf_exempt(controllers.PlayerLeaveGroup.as_view())),
    url(r'^joingame/', csrf_exempt(controllers.PlayerJoinGame.as_view())),
    url(r'^leavegame/', csrf_exempt(controllers.PlayerLeaveGame.as_view())),
    url(r'^', include(router.urls)),

]
