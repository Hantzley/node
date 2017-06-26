var auth_token = 'Bearer ' + process.env.SPARK_TOKEN;

var request = require("request");

var options = { method: 'GET',
  url: 'https://api.ciscospark.com/v1/rooms',
  headers:
   {
     'cache-control': 'no-cache',
     'content-type': 'application/json; charset=utf-8',
     max: '700',
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
