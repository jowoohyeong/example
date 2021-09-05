var util = require('util');
function Foo(){

}
Foo.prototype = {
    bar : function(){
        console.log('Foo_bar 실행');
    }
}

function Bar(){
}
util.inherits(Bar, Foo);

Bar.prototype.baz = function(){
    console.log("Bar.baz 실행");
}

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();


