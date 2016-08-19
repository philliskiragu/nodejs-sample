/**
* @Author: Phillis Kiragu <PKiragu>
* @Date:   2016-08-19T16:30:11+03:00
* @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-19T22:51:20+03:00
*/



console.log("Hello World");

var http = require('http');

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello Phillis"
   response.end('Welcome Phillis\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
