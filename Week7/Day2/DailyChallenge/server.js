const express = require('express');

const app = express();

app.get('/aboutme/:hobby', (req, res) => {
    const hb = req.params.hobby;
    if (/^[a-zA-Z]+$/.test(hb))
        res.end(hb);
    else    
        res.sendStatus(404);
});

app.get('/pic', (req, res) => {
    res.sendFile(__dirname+'/public/image.html');
});

app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/public/form.html');
}) 

app.get('/formdata', (req, res) => {
    res.end(req.query.mail + ' sent you a message: ' + req.query.message);
})

app.listen(5000,() => {
    console.log('listening 5000...');
});