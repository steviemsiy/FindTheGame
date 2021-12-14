import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    joingroup(id, playerid){
      console.log(id);
      console.log(playerid);
      var data = {
        groupid: id,
        playerid: playerid
      };

      Ember.$.ajax({
        url:'/api/joingroup/',
        type:"PUT",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to join group. Response from server is: ');
          console.log(response);
        }
      });
    },
    leavegroup(id, playerid){
      console.log(id);
      console.log(playerid);
      var data = {
        groupid: id,
        playerid: playerid
      };

      Ember.$.ajax({
        url:'/api/leavegroup/',
        type:"PUT",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to leave group. Response from server is: ');
          console.log(response);
        }
      });
    }
  }
});
