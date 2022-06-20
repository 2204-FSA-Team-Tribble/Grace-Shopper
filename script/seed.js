'use strict';

const {
  db,
  models: { User, Product, Order, OrderItem },
} = require('../server/db');
const productSeed = require('./ProductSeed');
const OrderItemSeed = require('./orderItemSeed');
const OrderSeed = require('./orderSeed');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      firstname: 'Cody',
      lastname: 'Smith',
      address: '171 Wallace Blvd Apt.6Z',
      city: 'Atlanta',
      state: 'GA',
      zipcode: 34093,
      username: 'cody',
      email: 'codythecoder@gmail.com',
      password: '123',
      isAdmin: true,
    }),
    User.create({
      firstname: 'Murphy',
      lastname: 'Benson',
      address: '1502 Southplace Rd',
      city: 'Brooklyn',
      state: 'NY',
      zipcode: 38970,
      username: 'murphy',
      email: 'murphywonder@gmail.com',
      password: '456',
      isAdmin: true,
    }),
    User.create({
      firstname: 'Milo',
      lastname: 'Victor',
      address: '10 Millieway Street',
      city: 'Queens',
      state: 'NY',
      zipcode: 38970,
      username: 'milo',
      email: 'milomilo@gmail.com',
      password: '789',
    }),
    User.create({
      firstname: 'Allie',
      lastname: 'Andrew',
      address: 'Milky Homes Apt. 9J',
      city: 'Bronx',
      state: 'NY',
      zipcode: 38970,
      username: 'allie',
      email: 'alliecool@yahoo.com',
      password: '012',
    }),
    User.create({
      firstname: 'Richie',
      lastname: 'Matthew',
      address: '1950 Southampton Rd. Apt. F9',
      city: 'Atlanta',
      state: 'GA',
      zipcode: 30070,
      username: 'rich',
      email: 'richierich@gmail.com',
      password: '603',
    }),

    User.create({
      firstname: 'Matthew',
      lastname: 'Peters',
      address: '13 Allway homes',
      city: 'Nashville',
      state: 'TN',
      zipcode: 38019,
      username: 'matthew',
      email: 'mathewwonderer@gmail.com',
      password: '506',
    }),
    User.create({
      firstname: 'Katherine',
      lastname: 'Aderogba',
      address: '892 Cherrywood Ln',
      city: 'Knoxville',
      state: 'KY',
      zipcode: 38970,
      username: 'katherine',
      email: 'Katiecat@gmail.com',
      password: '546',
    }),
    User.create({
      firstname: 'Emmanuel',
      lastname: 'Independent',
      address: '2345 Besthomes Rd',
      city: 'OakWood',
      state: 'OK',
      zipcode: 20970,
      username: 'manny',
      email: 'mannycooldude@yahoo.com',
      password: '002',
    }),

    User.create({
      firstname: 'Nathaniel',
      lastname: 'Philip',
      address: '1951 Longbeach',
      city: 'Birmingham',
      state: 'AL',
      zipcode: 16723,
      username: 'nat',
      email: 'natrudy@yahoo.com',
      password: '300',
    }),

    User.create({
      firstname: 'Shirley',
      lastname: 'GoodLuck',
      address: 'Milky Homes Apt. 9J',
      city: 'Burlington',
      state: 'IA',
      zipcode: 38970,
      username: 'shirley',
      email: 'shirlythebossb@yahoo.com',
      password: '390',
    }),
  ]);
  //Creating Products
  const products = await Promise.all(
    productSeed.map((item) => {
      return Product.create(item);
    })
  );

  const orderItems = await Promise.all(
    OrderItemSeed.map((item) => {
      return OrderItem.create(item);
    })
  );

  const orders = await Promise.all(
    OrderSeed.map((item) => {
      return Order.create(item);
    })
  );

  await orders[1].setUser(users[7]);
  await orders[0].setUser(users[0]);
  await orders[2].setUser(users[9]);
  await orderItems[0].setOrder(orders[0]);
  await orderItems[1].setOrder(orders[1]);
  await orderItems[2].setOrder(orders[2]);
  await orderItems[3].setOrder(orders[0]);
  await orderItems[4].setOrder(orders[2]);
  await orderItems[5].setOrder(orders[0]);
  await orderItems[6].setOrder(orders[2]);
  await orderItems[0].setProduct(products[1]);
  await orderItems[1].setProduct(products[1]);
  await orderItems[2].setProduct(products[1]);
  await orderItems[3].setProduct(products[5]);
  await orderItems[4].setProduct(products[0]);
  await orderItems[5].setProduct(products[3]);
  await orderItems[6].setProduct(products[4]);
  await orderItems[0].setUser(users[0]);
  await orderItems[1].setUser(users[7]);
  await orderItems[2].setUser(users[0]);
  await orderItems[3].setUser(users[0]);
  await orderItems[4].setUser(users[9]);
  await orderItems[5].setUser(users[0]);
  await orderItems[6].setUser(users[9]);

  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
