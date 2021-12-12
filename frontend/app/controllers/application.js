import Ember from 'ember';

export default Ember.Controller.extend({
  showMenu: '',
  actions: {
    toggleMenu(){
      if (this.get('showMenu')){
        this.set('showMenu', '');
      }
      else{
        this.set('showMenu', 'active');
      }

    },
    logout(){
      this.get('auth').logout();
    },
    activateIFTTT(){
      var data = {
        eventtype: 'dashboard_on',
        timestamp: Date.now().toString(),
        userid: this.get('auth.userid')
      };

      Ember.$.ajax({
        url:'/api/activateifttt',
        type:"POST",
        data: JSON.stringify(data),
        contentType:"application/json",
        dataType:"json",
        success: function(response){
          console.log('Attempting to turn ifttt on. Response from server is: ');
          console.log(response);
        }
      });
    },

    joingame(){
      var data = {
        groupid: this.get('id'),
        playerid: this.get('auth.userid')
      };

      Ember.$.ajax({
        url:'/api/joingame',
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

    register(){
      var data = {
        username: this.get('username'),
        email: this.get('email'),
        password: this.get('password'),
        age: this.get('age'),
        experience: this.get('experience'),
        level: this.get('level')
      };
      console.log('Data about to Transmit')

      Ember.$.ajax({
        url:'/api/register',
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
