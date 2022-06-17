const router = require('express').Router();
const {
  models: { Product, OrderItem, Order },
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
    const oneItem = await OrderItem.findByPk(req.params.id);
    res.json(oneItem);
  } catch (error) {
    next(error);
  }
});
