import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    joingame(id, playerid){
      console.log(id);
      console.log(playerid);
      var data = {
        gameid: id,
        playerid: playerid
      };

      Ember.$.ajax({
        url:'/api/joingame/',
        type:"PUT",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to join group. Response from server is: ');
          console.log(response);
          window.location.reload(true);
        }
      });
    },
    leavegame(id, playerid){
      console.log(id);
      console.log(playerid);
      var data = {
        gameid: id,
        playerid: playerid
      };

      Ember.$.ajax({
        url:'/api/leavegame/',
        type:"PUT",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to leave group. Response from server is: ');
          console.log(response);
          window.location.reload(true);
        }
      });
    }
  }
});
