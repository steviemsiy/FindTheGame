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
  model: function(params) {
    console.log(params);
    console.log('calling getdata from model');
    return this.getData(params);
  }
});
