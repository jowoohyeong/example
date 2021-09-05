// while(i<10){
//     i++;
//     var temp = parseInt(Math.random() * 10);
//     var isOddOrEven = temp%2;
//     var isPosOrNeg = temp > 5 ? 1 : -1;
//     console.log(temp,isOddOrEven*isPosOrNeg);
// }
var numbers = [];
for(var i=1; i<=25; i++){
    numbers.push(i);
}
var a= 0;
numbers.sort(function(a,b){
    var temp = parseInt(Math.random() * 10);
    var isOddOrEven = temp%2;
    var isPosOrNeg = temp > 5 ? 1 : -1;
    return (isOddOrEven*isPosOrNeg);
});
while(a<10){
    a++;
    var temp = parseInt(Math.random() * 10);
    var isOddOrEven = temp%2;
    var isPosOrNeg = temp > 5 ? 1 : -1;
    console.log(temp,isOddOrEven*isPosOrNeg);
}
console.log(numbers);