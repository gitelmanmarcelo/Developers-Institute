const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express()

app.use('/',express.static(__dirname+'/public'));

app.use(cors());

let list;

axios.get('https://jsonplaceholder.typicode.com/users')
  .then( response => {
    list = response.data;
  })
  .catch( (error) => {
    console.log(error);
  });

app.get('/', (req,res) => {
    res.sendFile('index.html');
});

  app.get('/search', (req,res) => {
    if (!req.query.name)
        res.status(200).send(JSON.stringify(list));
    else {
        const found = list.filter(item => item.name.slice(0,req.query.name.length).toLowerCase() == req.query.name.toLowerCase() );
        res.status(200).send(JSON.stringify(found));

    }
})

app.listen(5000, () => {
    console.log('listening 5000...');
})

