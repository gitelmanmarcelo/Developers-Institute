const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const products_router = require('./routes/products.js')

dotenv.config();

const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',express.static(__dirname + '/public'));

app.listen(process.env.PORT, () => { console.log('run on port '+ process.env.PORT)});

app.use('/api/products', products_router);

// app.get('/api/products',(req, res) => { 
//     res.json(products);
//         // res.send('hello!');
// });

// app.get('/api/products/:id',(req, res) => { 
//     prod = products.find(el => {
//         return (el.id == req.params.id) 
//     });
//     const arr = [];
//     arr.push(prod);
//     console.log(arr);
//     res.json(arr);
// });
    
// app.get('/api/search',(req, res) => { 
//     prod = products.find(el => {
//         return (el.id == req.query.q) 
//     });
//     console.log(req.query);
//     const arr = [];
//     arr.push(prod);
//     console.log(arr);
//     res.json(arr);
// });

// app.post('/api/products',(req, res) => { 
//     const new_prod = {
//         id: products.length + 1,
//         name: req.body.name,
//         price: req.body.price
//     };
//     products.push(new_prod);
//     res.status(200).json(products);
//     // res.sendStatus(200);
// });

// app.put('/api/products/:id',(req, res) => { 
//     const id = req.params.id;
//     const index = products.findIndex(item => item.id == id);
//     if (index === -1) {
//         res.status(404).json({msg: 'product not found'});
//     }
//     const updatedProduct = {
//         id: id,
//         name: req.body.name,
//         price: req.body.price
//     };
//     products[index] = updatedProduct;
//     res.status(200).json(products);
// });

// app.delete('/api/products/:id',(req, res) => { 
//     const id = req.params.id;
//     const index = products.findIndex(item => item.id == id);
//     if (index === -1) {
//         res.status(404).json({msg: 'product not found'});
//     }
//     products.splice(index,1);
//     res.status(200).json(products);
// });

