'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name:{
      type: DataTypes.STRING,
      validate:{
        isEmail: {
          args: true,
          msg: "username is email"
        }
      }     
    }, 
    password:{
      type: DataTypes.STRING,
      validate:{
        isNumeric: true
      }
    } 
  }, {
    sequelize,
    timestamps:false,
    modelName: 'User',
  });
  return User;
};