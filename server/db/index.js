//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const OrderItem = require('./models/OrderItem');
const Order = require('./models/Order');

//associations could go here!
Product.hasMany(OrderItem);
User.hasMany(Order);
Order.hasMany(OrderItem);
Order.belongsTo(User);
OrderItem.belongsTo(Order);
OrderItem.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    OrderItem,
    Order,
  },
};
