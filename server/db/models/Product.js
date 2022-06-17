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
  description: {
    type: Sequelize.TEXT,
    defaultValue:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  petType: {
    type: Sequelize.STRING,
    // ENUM('dog', 'cat', 'horse', 'other'),
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
