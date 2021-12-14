import Ember from 'ember';

export default Ember.Route.extend({
  getData(params) {
    var items = Ember.A([]);
    console.log('sending get request through routes');
    return Ember.$.get('/api/players/' + params.playerid + '/').then(function(playerinfo){
      console.log(playerinfo);
      return playerinfo  //items.reverse()
    }, function(msg){//error
      console.log('Error loading Games:');
      console.log(msg.statusText);
    });
  },
  model: function(params) {
    console.log(params);
    console.log('calling getdata from model');
    return this.getData(params);
  }
});
