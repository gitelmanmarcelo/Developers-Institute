import Users from '../models/UsersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const getUsers = async (req,res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','email']
        });
        res.json(users);
    } 
    catch (err) {
        res.status(404).json({msg:'not found'});
    }
}

export const login = async (req,res) => {
    try {
        const user = await Users.findAll({
            where:{
                email:req.body.email
            }
        })

        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({msg:'Wrong password!'});

        const userid = user[0].id;
        const email = user[0].email;

        const accessToken = jwt.sign({userid,email},process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '60s'});

        res.cookie('accessToken',accessToken, {hhtpOnly: true, maxAge: 60000});

        res.json({accessToken});

    } catch (err) {
        res.status(404).json({msg:'Email not found!'});
    }
}


export const register = async (req, res) => {
    const {email,password} = req.body;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt);

    try {
        await Users.create({
            email: email,
            password: hashPassword
        })
        res.json({msg:'Register Successfull!'})
    } catch (err) {
        res.status(403).json({msg:'Email already exists!'})
    }
}

export default register;