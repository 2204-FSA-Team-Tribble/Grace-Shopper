const router = require('express').Router();
const {
  models: { Product, User },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const products = await Product.findByPk(id, {
      include: {
        model: User,
      },
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const findProduct = await Product.findByPk(req.params.id);
    await findProduct.update(req.body);
    res.json(findProduct);
  } catch (error) {
    next(error);
  }
});
