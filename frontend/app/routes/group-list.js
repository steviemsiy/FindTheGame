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
    var isMember = false;
    console.log('sending get request through routes');
    return Ember.$.get('/api/groups/').then(function(groups){
      console.log(groups);
      groups.forEach(function(group){
        console.log(group);
        // isMember = group.players.filter(x => x.user == auth.userid);
        items.addObject({
          id: group.id,
          name: group.name
          // isplayer: isMember
          //players: group.fields.players,
          //link: 'index'
        });
      });
      console.log(items);
      console.log(groups);
      return items // groups
    }, function(msg){//error
      console.log('Error loading Groups:');
      console.log(msg.statusText);
    });
  },
  model(){
    console.log('calling getdata from model');
    return this.getData();
  }
});
