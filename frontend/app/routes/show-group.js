import Ember from 'ember';

export default Ember.Route.extend({
  getData(params) {
    var items = Ember.A([]);
    console.log('sending get request through routes');
    return Ember.$.get('/api/groups/' + params.groupid + '/').then(function(groupinfo){
      console.log(groupinfo);
      return groupinfo  //items.reverse()
    }, function(msg){//error
      console.log('Error loading Groups:');
      console.log(msg.statusText);
    });
  },

  getGames(params) {
    var items = Ember.A([]);
    console.log('sending get request through routes');
    return Ember.$.get('/api/groupgames/' + params.groupid + '/').then(function(gamelist){
      console.log(gamelist);
      return gamelist  //items.reverse()
    }, function(msg){//error
      console.log('Error finding Games in Group:');
      console.log(msg.statusText);
    });
  },

  getJoinLeave(params) {
    var data = {
      groupid: params.groupid,
      playerid: params.userid
    };
    var result;
    console.log('About to check membership');
    return Ember.$.post('/api/checkmembership/', data).then(function(response) {
      console.log('Checked membership. Response from server is: ');
      console.log(response.result);
      if (response.result) {
        result = {
          controller: "leavegroup",
          text: "Leave Group"
        }
      } else {
        result = {
          controller: "joingroup",
          text: "Join Group"
        }
      }
      console.log(result);
      return result;
    });
    // return Ember.$.ajax({
    //   url:'/api/checkmembership/',
    //   type:"POST",
    //   data: JSON.stringify(data),
    //   contentType:"application/json",
    //   dataType:"json",
    //   success: function(response){
    //     console.log('Checked membership. Response from server is: ');
    //     console.log(response.result);
    //     if (response.result) {
    //       result = {
    //         controller: "leavegroup",
    //         text: "Leave Group"
    //       }
    //     } else {
    //       result = {
    //         controller: "joingroup",
    //         text: "Join Group"
    //       }
    //     }
    //     console.log(result);
    //     return result;
    //   }
    // });
  },

  model: function(params) {
    console.log(params);
    console.log('calling getdata from model');
    return Em.RSVP.hash({
      joinleave: this.getJoinLeave(params),
      group: this.getData(params),
      games: this.getGames(params)
    });
  }
});
