import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    register(){
      var data = {
        username: this.get('username'),
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password'),
        age: this.get('age'),
        experience: this.get('experience'),
        level: this.get('level')
      };
      console.log('Data about to Transmit')

      Ember.$.ajax({
        url:'/api/register/',
        type:"POST",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to Create Account. Response from server is: ');
          console.log(response);
        }
      });
    }
  }
});
