const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',express.static(__dirname+'/public'));

app.get('/aboutme/:hobby', (req, res) => {
    const hb = req.params.hobby;
    if (/^[a-zA-Z]+$/.test(hb))
        res.send(hb);
    else    
        res.sendStatus(404);
});

app.get('/pic', (req, res) => {
    res.sendFile(__dirname+'/public/image.html');
});

app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/public/form.html');
}) 

app.post('/formdata', (req, res) => {
    res.send(req.body.mail + ' sent you a message: ' + req.body.message);
})

app.listen(5000,() => {
    console.log('listening 5000...');
});