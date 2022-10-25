const sequelize = require('./seq')
const {DataTypes} = require('sequelize') 
const UserModel = require("../models/user")
const User = UserModel(sequelize , DataTypes )


const connectDB = async() => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
        const users = await User.findAll();
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
    
}

connectDB()

//module.exports = connectDB