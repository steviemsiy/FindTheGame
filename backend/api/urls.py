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
    url(r'^players/', csrf_exempt(controllers.PlayerList.as_view())),
    #url(r'^profile', csrf_exempt(controllers.Profile.as_view())),
    url(r'^', include(router.urls)),

]
