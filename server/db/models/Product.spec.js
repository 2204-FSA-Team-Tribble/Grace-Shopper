const { expect } = require('chai');
const request = require('supertest');
const {
  db,
  models: { User, Product },
} = require('../db');
const seed = require('../../../script/seed');

describe('Product Model', () => {
  let product;
  beforeEach(
    async () =>
      (product = await Product.create({
        name: 'Cody the black dog',
        image:
          'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3500086-center-15',
        petType: 'dog',
        clothingType: 'shirt',
        price: 19.99,
      }))
  );

  it('has fields name, image, petType, clothingType, price', async () => {
    expect(product.name).to.equal('Cody the black dog');
    expect(product.image).to.equal(
      'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/3500086-center-15'
    );
    expect(product.petType).to.equal('dog');
    expect(product.clothingType).to.equal('shirt');
    expect(product.price).to.equal(19.99);
  });

  it('name cannot be null', async () => {
    const blankProduct = Product.build();
    try {
      await blankProduct.validate();
      throw Error('validation should have failed without name');
    } catch (err) {
      expect(err.message).to.contain('name cannot be null');
    }
  });

  it('price cannot be null', async () => {
    const blankProduct = Product.build();
    try {
      await blankProduct.validate();
      throw Error('validation should have failed without price');
    } catch (err) {
      expect(err.message).to.contain('pricecannot be null');
    }
  });
});
