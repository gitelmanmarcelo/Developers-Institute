const knex = require('knex');
const dotenv = require('dotenv');
dotenv.config();

const db = knex( {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

const express = require('express');

const app = express();

app.use('/',express.static(__dirname+'/public'));

app.get('/list/first',(req,res) => {
    db('shoplist')
    .insert({item:req.query.item, amount : req.query.amount})
    .returning('*')
    .then( rows => { 
        console.log(rows);
        db.select('*').from('shoplist')
        .then( rows => { 
            console.log(rows); 
            res.status(200).send(JSON.stringify(rows));
        })
        .catch( err => {
            console.log(err);
         })
    })
    .catch( err => {
        console.log(err);
    });
});

app.get('/list',(req,res) => {
    db('shoplist')
    .insert({item:req.query.item, amount : req.query.amount})
    .returning('*')
    .then( rows => { 
        console.log(rows); 
        res.status(200).send(JSON.stringify(rows));
    })
    .catch( err => {
        console.log(err);
    });
});

app.listen(5000, () => {
    console.log('Listening 5000...');
});


