// Task Name: Lab 3
// Author: Sean Warner Dean T. Datu
// Section: WD - 201

var http = require('http');
// Import Node.js core module

var server = http.createServer(function (req, res) {
  //create web server
  if (req.url == '/') {
    //check the URL of the current request

    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content
    res.write('<html><body> <h1>Welcom to my Node.js Application</h1> </body></html>');
    res.write('<html><body> <p>Welcome John Smith. This is an activity about basics of Node.js</p></body></html>');
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body> <p>This is student Page.</p></body></html>');
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body> <p>This is admin Page.</p></body></html>');
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..');
