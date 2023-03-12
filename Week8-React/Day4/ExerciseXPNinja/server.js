express = require('express');
cors = require('cors');

app = express();

app.use(cors())

app.get('/',(req,res) => {
    res.json([{id: 1, username: "somebody"},{id: 2, username: "somebody_else"}]);
});

app.listen(5000,() => {console.log('listening 5000...')});