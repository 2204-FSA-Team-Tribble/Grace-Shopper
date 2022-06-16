const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
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

  //May delete these once associations are set properly
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  totalPrice: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.price * this.quantity;
    },
    set(value) {
      throw new Error('Do not try to override the totalPrice');
    },
  },
});

module.exports = Order;
