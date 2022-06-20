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

//use this route if the cart is empty/order has not been created. Create order, then create orderItem
router.post('/', async(req, rew,next)=>{

  try {
    const newOrder= await Order.create(req.body)
    res.json(newOrder)
  } catch (error) {
    next (error)
  }
  })

//find order by Id, includes orderitems and user info
router.get('/:id', async (req, res, next) => {
  try {
    const orderId=req.params.id
    const order = await Order.findByPk({ include: [OrderItem, User] });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

