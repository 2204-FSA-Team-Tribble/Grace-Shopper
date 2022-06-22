const router = require('express').Router();
const {
  models: { Order, User, OrderItem, Product },
} = require('../db');
module.exports = router;

//in api/orders

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: [OrderItem, User] });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//use this route if the cart is empty/order has not been created. Create order, then create orderItem
router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.json(newOrder);
  } catch (error) {
    next(error);
  }
});

//find order by Id, includes orderitems and user info
router.get('/:id', async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByPk(orderId, {
      include: [User, { model: OrderItem, include: [Product] }],
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

//update order by Id
router.put('/:id', async (req, res, next) => {
  try {
    const orderId = req.params.id;
    console.log('in route.put', req.body);
    const order = await Order.findByPk(orderId);
    await order.update(req.body);
    console.log(order);
    if (order.dataValues.status === 'complete') {
      const newOrder = await Order.create();
      await newOrder.setUser(order.dataValues.userId);
    }
    res.json(order);
  } catch (err) {
    next(err);
  }
});
