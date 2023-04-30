// Exercise 1: Shopping
// Instructions
// Note : This exercise is inspired from the Exercise XP NINJA of yesterday, but is INDEPENDANT from yesterday’s exercise.

// We will be building a simple application where we will store a shopping list.
// Each item is an object that contains a name and a price. This item will be saved to an array. Therefore our shopping list is an array of objects.
// Create an HTML file to hold a form (see Part 3) and a json file to store your shopping list items.

// Our application should have the following routes:

// GET /items - this should respond with a list of shopping items.

// GET /items/:id - this route should display a single item’s name and price

// POST /items - this route should accept form data and add it to the shopping list. (ie. add it to the json file)

// Bonus : For the two first instructions, instead of sending an array of object, send an HTML file
// Some help here and here

const express = require('express');
const fs = require('fs');

let data;
try {
    data = fs.readFileSync('list.json','utf-8');
} catch (err) {
    console.log(err);
}

const list = JSON.parse(data);

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.get('/items', (req,res) => {
    res.status(200).json(list);
})

app.get('/items/:id', (req,res) => {
    const item = list.find(item => item.id == req.params.id);
    res.status(200).json(item);
})

app.post('/items', (req,res) => {
    const new_item = { id: list.length, name: req.body.name, price: req.body.price};
    list.push(new_item);
    fs.writeFile('list.json',JSON.stringify(list),err => {
        if (err) {
            console.log('Error in list.json: ' + err);
        }
    });
    res.status(200).json(list);
})

app.listen(5000, () => { 
    console.log('listening 5000....')
});