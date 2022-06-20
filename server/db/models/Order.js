const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  //Total will likely be deleted from this file once associations are set in API routes. Will keep the field the same name
  total: {
    type: Sequelize.FLOAT,
  },
  status:{
    type:Sequelize.ENUM('cart','complete')
  },
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING(2),
  },
  zipcode: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Order;
