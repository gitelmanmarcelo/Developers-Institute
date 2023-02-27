const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const list = [
{
    id: 0,
    name: 'shirt',
    price: 20
},
{
    id: 1,
    name: 'pants',
    price: 40
}
,
{
    id: 2,
    name: 'sweater',
    price: 60
}
,
{
    id: 3,
    name: 'hat',
    price: 30
}];



app.get('/item', (req,res) => {
    res.json(list);
});

app.get('/item/:id', (req,res) => {
    res.json(list.find(item => item.id == req.params.id));
});

app.post('/item', (req,res) => {
    const new_item = {
        id: list.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    list.push(new_item);
    res.status(200).json(list);
});

app.listen(3000,() => console.log('listening 3000...'));
