//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const OrderItem = require('./models/OrderItem');
const Order = require('./models/Order');

//associations could go here!
Product.belongsToMany(OrderItem, { through: 'Product_OrderItem' });
User.belongsToMany(Order, { through: 'User_Order' });
Order.belongsToMany(OrderItem, { through: 'Order_OrderItem' });
Order.belongsTo(User, { through: 'User_Order' });
OrderItem.belongsTo(Order, { through: 'Order_OrderItem' });
OrderItem.belongsTo(Product, { through: 'Product_OrderItem' });

module.exports = {
  db,
  models: {
    User,
    Product,
    OrderItem,
    Order,
  },
};
