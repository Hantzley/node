/*
  Author : Hantzley Tauckoor
  Version: 1
  Description: Test script for REST API call
*/

const api_url = 'http://localhost:8080'
const request = require("request");

const options = { method: 'GET',
  url: api_url,
  headers:
   {
     'cache-control': 'no-cache',
     'content-type': 'application/json; charset=utf-8',
   }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  //console.log(body);
  jsonObject = JSON.parse(body);
  tweet(jsonObject)
});

function tweet(data){
  console.log(data)
}
