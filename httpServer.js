/*
  Author : Hantzley Tauckoor
  Version: 1
  Description: Test script for a simple HTTP server
*/

const http = require('http');
const port = 8080

const callback = function(request, response){
  response.writeHead(200);
  response.write('Hello There!!!');
  response.end();
}

http.createServer(callback).listen(port);

console.log('Listening in port ' + port)
