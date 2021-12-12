import Ember from 'ember';

export default Ember.Route.extend({
  getData(params) {
    var items = Ember.A([]);
    console.log('sending get request through routes');
    return Ember.$.get('/api/games/' + params.gameid + '/').then(function(gameinfo){
      console.log(gameinfo);
      return gameinfo  //items.reverse()
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
