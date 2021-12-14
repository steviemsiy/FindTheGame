import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    creategame(){
      var data = {
        name: this.get('name'),
        description: this.get('description'),
        sport: this.get('sport'),
        location: this.get('location'),
        date: new Date(this.get('date')),
        group: parseInt(this.get('model'))
      };
      console.log('Data about to Transmit')
      console.log(data)

      Ember.$.ajax({
        url:'/api/games/',
        type:"POST",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to Schedule a new Game. Response from server is: ');
          console.log(response);
        }
      });
    }
  }
});
