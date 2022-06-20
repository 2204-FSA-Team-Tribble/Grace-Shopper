const Sequelize = require('sequelize');
const db = require('../db');

const OrderItem = db.define('orderItem', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },

  //May delete if associations are updated... will keep same field names though
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

module.exports = OrderItem;
