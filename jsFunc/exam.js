function swap(){
    var temp = a.a;
    a.a = a.b;
    a.b = temp;
    console.log("swap inside");
    
    
}
var a = {};
a.a = 5;
a.b = 3;
console.log('a.a = ' + a.a +'\na.b = ' + a.b);
swap();
console.log('a.a = ' + a.a +'\na.b = ' + a.b);