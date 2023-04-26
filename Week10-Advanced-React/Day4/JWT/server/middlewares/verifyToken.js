import jwt from 'jsonwebtoken';
import Users from '../models/UsersModel.js';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken || req.headers['x-access-token'];

    if (!accessToken) return res.status(401).json({msg:'not authorized'});

    jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
        if (err) return res.status(403).json({msg:'invalid token'});

        req.email = decoded.email;
        req.userid = decoded.userid;

        try {
            const user = await Users.findAll({
                where: {
                    email: decoded.email
                }
            })
            user.length === 0 ? 
            res.status(403).json({msg: 'email verification fail!  - injection!!!'})
            : next();
        } 
        catch (err) {
            res.status(403).json({msg: 'email verification fail!  - injection!!!'})
        }

    })  
}