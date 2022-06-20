const router = require('express').Router();
const {
  models: { User, OrderItem, Order },
} = require('../db');
const Sequelize = require('sequelize');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: [
        'id',
        'firstname',
        'lastname',
        'address',
        'city',
        'state',
        'zipcode',
        'username',
        'email',
      ],
      include: [{ model: Order, include: OrderItem }],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const userActiveOrders = await User.findByPk(id, {
      attributes: [
        'id',
        'firstname',
        'lastname',
        'address',
        'city',
        'state',
        'zipcode',
        'username',
        'email',
      ],
      include: [
        {
          model: Order,
          where: { status: 'cart' },
          include: [
            {
              model: OrderItem,
            },
          ],
        },
      ],
    });
    const userOrders = await User.findByPk(id, {
      attributes: [
        'id',
        'firstname',
        'lastname',
        'address',
        'city',
        'state',
        'zipcode',
        'username',
        'email',
      ],
      include: [
        {
          model: Order,
          include: [
            {
              model: OrderItem,
            },
          ],
        },
      ],
    });
    if (req.body.activeOrders) {
      res.json(userActiveOrders);
    }
    res.json(userOrders);
  } catch (error) {
    next(error);
  }
});

//
router.put('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    user.update(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
