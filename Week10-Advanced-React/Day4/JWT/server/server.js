import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/Database.js'
import router from './routes/Users.js';

dotenv.config();

const app = express();

app.use(cors())
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router)

app.get('/test', (req,res) => {
    res.end('success!');
});

app.listen(process.env.PORT || 8080,() => { console.log('listening ',process.env.PORT || 5000)});

try {
    await db.authenticate();
    console.log('db connected');
} catch (err) {
    console.log(err);
}
