const express = require('express');
const fs = require('fs');

const app = express();

app.use('/',express.static(__dirname+'/public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let users = [];

try {
    users = JSON.parse(fs.readFileSync('users.json','utf-8'));
} catch (err) {
    console.log('file error: ',err);
}

app.post('/login', (req, res) => {
    if ( !users.find(item => item.username === req.body.username && item.password === req.body.password) )
        res.status(404).send('not found');
    else
        res.status(200).send('success');
});

app.post('/register', (req, res) => {
    if (users.find(item => item.username === req.body.username))
        return res.status(404).send('user exists');
    const new_user = req.body;
    users.push(new_user);
    try {
        fs.writeFileSync('users.json',JSON.stringify(users));
    } catch (err) {
        console.log('file error: ',err);
    }
    res.status(200).send('success');
});

app.listen(5000,() => {
    console.log('listening 5000...');
});