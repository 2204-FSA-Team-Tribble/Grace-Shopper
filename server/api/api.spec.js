/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const {
  db,
  models: { User, Product },
} = require('../db');
const seed = require('../../script/seed');
const app = require('../app');

describe('User routes', () => {
  beforeEach(async () => {
    await seed();
  });

  describe('/api/users/', () => {
    it('GET /api/users', async () => {
      const res = await request(app).get('/api/users').expect(200);

      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(10);
    });
  }); // end describe('/api/users')
  describe('/api/users/:id', () => {
    it('GET /api/users/:id', async () => {
      const res = await request(app).get('/api/users/4').expect(200);

      expect(res.body).to.be.an('object');
    });
  }); // end describe('/api/users')
}); // end describe('User routes')

describe('Product routes', () => {
  beforeEach(async () => {
    await seed();
  });

  describe('/api/products/', () => {
    it('GET /api/products', async () => {
      const res = await request(app).get('/api/products').expect(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('/api/products/:id', () => {
    it('GET /api/products/:id', async () => {
      const res = await request(app).get('/api/products/40').expect(200);
      expect(res.body).to.be.an('object');
    });
  });

  describe('/api/products/', () => {
    it('POST /api/products', async () => {
      const res = await request(app).post('/api/products').expect(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('/api/products/:id', () => {
    it('PUT /api/products/:id', async () => {
      const res = await request(app).put('/api/products/40').expect(200);
      expect(res.body).to.be.an('object');
    });
  });
});
