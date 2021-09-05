var EventEitter = require('events').EventEmitter;
var evt = new EventEitter();

evt.on('call', function(str){
    console.log("Hello! "+ str);
});

//evt.removeAllListeners();

setTimeout(function(){
    evt.emit("helloNode", "Node.js");
}, 1000);
