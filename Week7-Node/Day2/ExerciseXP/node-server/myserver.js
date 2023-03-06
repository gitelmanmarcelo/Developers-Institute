// Exercise 1 : HTTP
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/

const http = require('http');

const server = http.createServer( (req, res) => {
    res.write('<h1>First response</h1>');
    res.write('<h2>Second response</h2>');
    res.end('<h3>Last response</h3>');
});

server.listen(3000,() => {
    console.log('listening on 3000')
});
