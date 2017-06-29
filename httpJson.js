const http = require('http');
const port = 8080

const jsonObj = {
  'Vendor':'Cisco',
  'HQ':'San Jose, CA',
  'Technologies':['Routers','Switches','Servers','Software','Cloud','API','IOT','Optical','Automation']
}


const callJson = function (request,response) {
  response.writeHead(200);
  //response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(jsonObj));
  response.end();
}


const app = http.createServer(callJson);
app.listen(port);

console.log('Listening in port ' + port)
