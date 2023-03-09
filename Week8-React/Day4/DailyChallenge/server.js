const express = require('express');
const cors = require('cors');

app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());

app.get('/api/hello',(req,res) => { 
    console.log(' get api/hello');
    res.end('Hello From Express!');
});

app.post('/api/hello',(req,res) => { 
    console.log('post: '+ req.body.msg);
    res.end('I received your POST request. This is what you sent me: '+ req.body.msg);
});

app.listen(5000, () => {console.log('listening 5000...')});
