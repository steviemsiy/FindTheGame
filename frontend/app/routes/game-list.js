import Ember from 'ember';

export default Ember.Route.extend({
  getData(){
    var items = Ember.A([]);
    console.log('sending get request through routes');
    return Ember.$.get('/api/games/').then(function(games){
      console.log(games);
      return games  //items.reverse()
    }, function(msg){//error
      console.log('Error loading Games:');
      console.log(msg.statusText);
    });
  },
  model() {
    console.log('calling getdata from model');
    return this.getData();
  }
});
