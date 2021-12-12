import Ember from 'ember';

export default Ember.Controller.extend({
  arrayOFgroup:['apple','pineapple','banana']
  // actions:{
  //   startgroup(){
  //     var data = {
  //       name: this.get('name')
  //     };
  //     console.log('Data about to Transmit')
  //
  //     Ember.$.ajax({
  //       url:'/api/groups/',
  //       type:"GET",
  //       data: JSON.stringify(data),
  //       contentType:"application/json",
  //       dataType:"json",
  //       success: function(response){
  //         console.log('Attempting to Create a new Group. Response from server is: ');
  //         console.log(response);
  //       }
  //     });
  //   }
  // }
});
