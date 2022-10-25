const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'entershaman',
    'root',
    'entershaman8286',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
);

module.exports = sequelize;
