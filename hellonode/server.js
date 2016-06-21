var http = require('http');

var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World!");
}
var www = http.createServer(handleRequest);
www.listen(8088);

console.log('hello_nodejs server is listening on 8088');
