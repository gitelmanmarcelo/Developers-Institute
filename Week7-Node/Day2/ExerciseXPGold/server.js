express = require('express');

app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/',(req,res) => {
    const user = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
    };
    console.log(user);
    res.status(200).json(user);
})

app.listen(3001,() => {
    console.log('listening 3001...');
})