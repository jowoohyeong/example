var numbers = [10, 20, 30, 40, 50];

for(i = 0; i < numbers.length; i++){
    console.log(i, numbers[i]);
}


var number = [];
var count = 0;

fill();
function fill(){    
    var mininumber={
        name : "zz" + count,
        date : "zz" + count
    };
    //mininumber.name = "zz" + count;
    //mininumber.date = "zz" + count;
    number.push(mininumber);
    count++;
}

fill();
fill();
fill();

number.splice(2, 1);
console.log(number);
