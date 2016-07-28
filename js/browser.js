var pingPong = require('./ping-pong.js').pingPong;

$(document).ready(function(){
  $('#ping-pong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    console.log(goal);
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solution').append('<li>' + element + "</li>");
    });
  });
});
