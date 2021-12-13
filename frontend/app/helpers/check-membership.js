import Ember from 'ember';

function checkMembershipAjax(params/*, hash*/) {
  params = params.slice(0);
  console.log(params);

  var data = {
    groupid: params[1],
    playerid: params[0]
  };
  var result = false;
  console.log('Data about to Transmit')

  return Ember.$.ajax({
    url:'/api/checkmembership/',
    type:"POST",
    data: JSON.stringify(data),
    contentType:"application/json",
    dataType:"json",
    success: function(response){
      console.log('Check membership. Response from server is: ');
      console.log(response.result);
      //result = response.result;
      //return result;
    }
  });

  // return params;
  //console.log(result);
  //return result;
}

export function checkMembership(params/*, hash*/) {
  var result = checkMembershipAjax(params).done(function(data) {
    console.log('after checkmembershipAJAX ' + data.result);
    return data.result;
  });
  console.log('returning from checkMembership ' + result);
  return result;
}

export default Ember.Helper.helper(checkMembership);
