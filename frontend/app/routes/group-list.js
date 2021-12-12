import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   var data;
  //
  //   Ember.$.ajax({
  //     url:'/api/groups/',
  //     type: 'GET',
  //     success: function(response){
  //       console.log(reponse)
  //       data=JSON.parse(response)
  //     }
  //   });
  //
  //   return data;
  // }

  getData(){
    var items = Ember.A([]);
    console.log('sending get request through routes');
    return Ember.$.get('/api/groups/').then(function(groups){
      console.log(groups);
      // groups.forEach(function(group){
      //   console.log(group);
      //   items.addObject({
      //     id: group.pk,
      //     name: group.fields.name
      //     //players: group.fields.players,
      //     //link: 'index'
      //   });
      // });
      return groups  //items.reverse()
    }, function(msg){//error
      console.log('Error loading Groups:');
      console.log(msg.statusText);
    });
  },
  model() {
    console.log('calling getdata from model');
    return this.getData();
  }
});
