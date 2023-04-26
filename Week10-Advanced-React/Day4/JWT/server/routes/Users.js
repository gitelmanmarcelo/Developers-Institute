import express from "express";
import { register, login, getUsers } from "../controllers/Users.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import jwt from 'jsonwebtoken';


const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/users',verifyToken,getUsers);
router.get('/token', verifyToken, (req,res) => {

     // here we can refresh a new token to the client
     const userid = req.userid;
     const email = req.email;

     const accessToken = jwt.sign({userid,email},process.env.ACCESS_TOKEN_SECRET,
         {expiresIn: '60s'});

     res.cookie('accessToken',accessToken, {hhtpOnly: true, maxAge: 60000});

     res.json({accessToken});
    res.status(200).json({msg:"ok"});
})

export default router;
