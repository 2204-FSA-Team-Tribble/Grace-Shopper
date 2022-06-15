const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    validate: { notEmpty: true },
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      'https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s6551nujnl3gajm8.png',
  },
  petType: {
    type: Sequelize.ENUM('dog', 'cat', 'horse', 'other'),
    defaultValue: 'dog',
  },
  clothingType: {
    type: Sequelize.ENUM('shirt', 'dress', 'coat', 'swim', 'shoes', 'other'),
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Product;
