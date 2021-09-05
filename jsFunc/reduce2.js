var a = ["1", "2", "3", "4", "5"];
var left  = a.reduce((prev, cur)=> prev + cur);
var right = a.reduceRight(function(prev, cur) { return prev + cur; });

console.log(left);  // "12345"
console.log(right); // "54321"