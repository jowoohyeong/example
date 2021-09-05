var fs = require('fs');

fs.readFile('./data/asyn.txt', 'utf-8', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("비동기적 읽기 - %s", data);
    }
})
try{
    var syntext = fs.readFileSync('./data/syn.txt','utf-8');
    console.log('동기적읽기 - %s', syntext);
}catch(err){
    console.log(err);
}

var data = '비동기적 메모작성';
fs.writeFile('./data/asyn.txt', data, 'utf-8',function(){
    console.log(data);
});

var data2 = '동기적 메모작성'
fs.writeFileSync('./data/syn.txt', data2, 'utf-8');
console.log(data2)