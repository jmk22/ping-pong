var pingPong = require('./ping-pong.js').pingPong;
var prompt = require('prompt');
prompt.start()

prompt.get('what number', function(err, result){
  var result = pingPong(result.goal);
  result.forEach(function(element){
    console.log(element);
  });
});
