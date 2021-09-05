var server = require('http');


server.createServer(function (req, res){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Hello node.js!\n');
}).listen(3000);

console.log('Server is running at http://loaclhost:3000/');