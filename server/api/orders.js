const router = require('express').Router();
const {
  models: { Order, User, OrderItem },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: [OrderItem, User] });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});
