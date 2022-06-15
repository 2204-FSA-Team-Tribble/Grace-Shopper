const router = require('express').Router();
const {
  models: { User, Product },
} = require('../db');
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
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id, {
      include: {
        model: Product,
      },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateUser = await User.findByPk(req.params.id);
    await updateUser.update(req.body);
    res.json(updateUser);
  } catch (error) {
    next(error);
  }
});
