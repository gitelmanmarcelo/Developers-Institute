const express = require('express');
const cors = require('cors');

const {products} = require('./database/products.js');

const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',express.static(__dirname + '/public'));

app.listen(5000, () => { console.log('run on port 5000')});

app.get('/api/products',(req, res) => { 
    res.json(products);
        // res.send('hello!');
});

app.post('/api/products',(req, res) => { 
    const new_prod = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(new_prod);
    res.status(200).json(products);
    // res.sendStatus(200);
});

app.get('/api/products/:id',(req, res) => { 
    prod = products.find(el => {
        return (el.id == req.params.id) 
    });
    const arr = [];
    arr.push(prod);
    console.log(arr);
    res.json(arr);
});
    
app.get('/api/search',(req, res) => { 
    prod = products.find(el => {
        return (el.id == req.query.q) 
    });
    console.log(req.query);
    const arr = [];
    arr.push(prod);
    console.log(arr);
    res.json(arr);
});