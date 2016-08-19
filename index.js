/**
* @Author: Phillis Kiragu <PKiragu>
* @Date:   2016-08-19T23:45:16+03:00
* @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-19T23:51:09+03:00
*/



var http = require ('http');
var prompt = require ('prompt');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer (function  (request,response) {
  fs.readFile("index.html", function(err, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });


var c;
function addition(a, b){
  c = a + b;
  alert(c);
  document.getElementById("ans").innerHTML=c;
  return c;
}

function minus(a, b){
  c = a - b;
  return c;
}
function divide(a, b){
  c = a / b;
  return c;
}
function multiply(a, b){
  c = a * b;
  return c;
}

}).listen(8081);
  console.log('Server running at http://127.0.0.1:8081/');
