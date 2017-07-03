/*
  Author : Hantzley Tauckoor
  Version: 1
  Description: Test script to get Spark room list
*/

const auth_token = 'Bearer ' + process.env.SPARK_TOKEN;
const api_url = 'https://api.ciscospark.com/v1/rooms'
const request = require("request");

const options = { method: 'GET',
  url: api_url,
  headers:
   {
     'cache-control': 'no-cache',
     'content-type': 'application/json; charset=utf-8',
     max: '250',
     authorization: auth_token
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
