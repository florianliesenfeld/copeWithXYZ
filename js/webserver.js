var http = require('http');
var port = 8080;
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world!');
});
server.listen(port);
console.log('The server is available at http://127.0.0.1:' + port + '/');