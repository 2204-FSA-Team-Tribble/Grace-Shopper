
const {expect} = require('chai')
const { db, models: { Product } } = require('../index')
const jwt = require('jsonwebtoken');
const seed = require('../../../script/seed');

describe('Product model', () => {
  let products;
  beforeEach(async() => {
    products = (await seed()).products;
  })
  describe('instanceMethods', () => {
    describe('generateToken', () => {
      it('returns a token with the id of the user', async() => {
        const token = await products.cody.generateToken();
        const { id } = await jwt.verify(token, process.env.JWT);
        expect(id).to.equal(users.cody.id);
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('Product model')
