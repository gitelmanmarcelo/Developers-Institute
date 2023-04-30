// Exercise 2 : Express & Parameters
// Instructions
// In the server.js file, create your server using express.
// Create a route /, and use a GET request method.
// The path of the route should contain the route parameter id. 
// Check out the lesson named Express Routes & Queries in the Course Notes.
// The handler function of the route should respond with the value of the route parameter.
//  Check out req.params.
// Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
// The response on the page and on the console, should be a JSON Object

const express = require('express');

const app = express();

app.get('/:id', (req,res) => {
    const data = { id : req.params.id};
    console.log(data);
    res.end(JSON.stringify(data));
});

app.listen(3000, () => {
    console.log('listenong on 3000');
});

