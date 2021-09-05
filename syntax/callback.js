var fs = require('fs');

function a(){
   console.log('A'); 
}

var b = function(){
    console.log('B'); 
}
function slowfunc(callback){
    console.log('slowfunc contents');
    callback();
}
slowfunc(b);
a();
b();
