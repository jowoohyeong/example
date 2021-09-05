const arr2 = [3, 9, 29, 30, 11, 13];

console.log(Array.from(arr2, x=>x*2)); 
console.log(arr2.map(x => x<11?x*2:x));

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

console.log(numbers);   //149
console.log(roots);     //123

var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });

console.log(a);