const http = require('http');
const port = 8080

const callback = function(request, response){
  response.writeHead(200);
  response.write('Hello There!!!');
  response.end();
}

http.createServer(callback).listen(8080);

console.log('Listening in port ' + port)
