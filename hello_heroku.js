{
  "name": "helloapp",
  "version": "1.0.0",
  "description": "example node app for heroku ",
  "main": "hello_heroku.js",
  "scripts": {
  "start": "node hello_heroku.js"
},
  "repository": {
  "type": "git",
  "url": ""
},
  "author": "",
  "license": "ISC",
  "bugs": {
  "url": ""
},
  "homepage": ""
}
var http = require('http');
var port = process.env.PORT || 3000;
//var port = 8080;   //uncomment to run local
console.log("This goes to the console window");
http.createServer(function (req, res) 
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write ("Success!  This app is deployed online");
  res.end();
  console.log('the end!')
}).listen(port);
