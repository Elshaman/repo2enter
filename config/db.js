const sequelize = require('./seq')
const {DataTypes} = require('sequelize') 
const UserModel = require("../models/user")
const User = UserModel(sequelize , DataTypes )
const {ValidationError} = require('sequelize');


const connectDB = async() => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
        //const users = await User.findAll();
        newuser = await User.create({name: "shaman@shaman.com" , password: 567})
        await newuser.validate()
        await newuser.save()
    } catch (e) {
        if(e instanceof ValidationError){
            return console.error( 'Captured validation error: ', e.errors[0].message, e.errors[1].message);
        }
        console.error(e);
    }
    
}

connectDB()

//module.exports = connectDB