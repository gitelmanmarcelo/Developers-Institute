import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Users = db.define('users', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING 
    }
    },
    {
        timestamps : false
    })

export default Users;