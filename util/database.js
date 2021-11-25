const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user name', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
