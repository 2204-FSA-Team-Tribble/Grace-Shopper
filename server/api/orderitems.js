const router = require('express').Router();
const {
  models: { Product, OrderItem, Order, User },
} = require('../db');
module.exports = router;

//main/orderitems route

//show all items that have ever been ordered
router.get('/', async (req, res, next) => {
  try {
    const orderItems = await OrderItem.findAll({ include: Product });
    res.json(orderItems);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    //userid is sent
    //guestaccount in user
    const oneItem = await OrderItem.findByPk(req.params.id, {
      include: { model: Product },
    });
    res.json(oneItem);
  } catch (error) {
    next(error);
  }
});

//need an orderId for this to function (send to the orders post first, pull that info, then come back here)
router.post('/:id', async (req, res, next) => {
  try {
    const newItem = await OrderItem.create(req.body.product);
    const user = await User.findByPk(req.body.userId);
    const product = await Product.findByPk(req.body.productId);
    const order = await Order.findByPk(req.body.orderId);
    await newItem.setOrder(order);
    await newItem.setUser(user);
    await newItem.setProduct(product);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const item = await OrderItem.findByPk(req.params.id);
    await item.update(req.body);
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const item = await OrderItem.findByPk(req.params.id);
    await item.destroy();
    res.send(item);
  } catch (error) {
    next(error);
  }
});
