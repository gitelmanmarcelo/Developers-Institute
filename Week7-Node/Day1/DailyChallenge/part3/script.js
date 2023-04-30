// Use the exported module in a script.js file.

// Create a server with http and set the response header to 'text/html'. 
// Respond with an HTML paragraph that outputs the current date and time from the exported module.

// Your server should run on http://localhost:8080/

const now = require('./main.js');

const http = require('http');

const server = http.createServer( (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>The date and time are currently: ${now.now()}</p>`)
});

server.listen(8080,() => {
    console.log('Listening...');
});