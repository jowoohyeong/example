var fs = require('fs');
var text;

console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');

fs.readFile('syntax/sample.txt','utf8', function(error, aresult){
    console.log('asyntax : '+ aresult);
    text = aresult;
})
console.log('syn : ' + result);
console.log('C');

