"use strict";

const {
  db,
  models: { User, Product },
} = require("../server/db");
const productSeed = require("./ProductSeed");
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      firstname: "Cody",
      lastname: "Smith",
      address: "171 Wallace Blvd Apt.6Z",
      city: "Atlanta",
      state: "GA",
      zipcode: 34093,
      username: "cody",
      email: "codythecoder@gmail.com",
      password: "123",
      isAdmin: true,
    }),
    User.create({
      firstname: "Murphy",
      lastname: "Benson",
      address: "1502 Southplace Rd",
      city: "Brooklyn",
      state: "NY",
      zipcode: 38970,
      username: "murphy",
      email: "murphywonder@gmail.com",
      password: "456",
      isAdmin: true,
    }),
    User.create({
      firstname: "Milo",
      lastname: "Victor",
      address: "10 Millieway Street",
      city: "Queens",
      state: "NY",
      zipcode: 38970,
      username: "milo",
      email: "milomilo@gmail.com",
      password: "789",
    }),
    User.create({
      firstname: "Allie",
      lastname: "Andrew",
      address: "Milky Homes Apt. 9J",
      city: "Bronx",
      state: "NY",
      zipcode: 38970,
      username: "allie",
      email: "alliecool@yahoo.com",
      password: "012",
    }),
    User.create({
      firstname: "Richie",
      lastname: "Matthew",
      address: "1950 Southampton Rd. Apt. F9",
      city: "Atlanta",
      state: "GA",
      zipcode: 30070,
      username: "rich",
      email: "richierich@gmail.com",
      password: "603",
    }),

    User.create({
      firstname: "Matthew",
      lastname: "Peters",
      address: "13 Allway homes",
      city: "Nashville",
      state: "TN",
      zipcode: 38019,
      username: "matthew",
      email: "mathewwonderer@gmail.com",
      password: "506",
    }),
    User.create({
      firstname: "Katherine",
      lastname: "Aderogba",
      address: "892 Cherrywood Ln",
      city: "Knoxville",
      state: "KY",
      zipcode: 38970,
      username: "katherine",
      email: "Katiecat@gmail.com",
      password: "546",
    }),
    User.create({
      firstname: "Emmanuel",
      lastname: "Independent",
      address: "2345 Besthomes Rd",
      city: "OakWood",
      state: "OK",
      zipcode: 20970,
      username: "manny",
      email: "mannycooldude@yahoo.com",
      password: "002",
    }),

    User.create({
      firstname: "Nathaniel",
      lastname: "Philip",
      address: "1951 Longbeach",
      city: "Birmingham",
      state: "AL",
      zipcode: 16723,
      username: "nat",
      email: "natrudy@yahoo.com",
      password: "300",
    }),

    User.create({
      firstname: "Shirley",
      lastname: "GoodLuck",
      address: "Milky Homes Apt. 9J",
      city: "Burlington",
      state: "IA",
      zipcode: 38970,
      username: "shirley",
      email: "shirlythebossb@yahoo.com",
      password: "390",
    }),
  ]);
  //Creating Products
  const products = await Promise.all(
    productSeed.map((item) => {
      return Product.create(item);
    })
  );
  // console.log(`seeded ${users.length} users`);
  // console.log(`seeded ${products.length} users`);
  console.log(`seeded successfully`);

  await users[0].addProducts([products[2], [3]]);
  await users[1].addProducts(products[1]);
  await users[2].addProducts([products[50], [9], [21], [2]]);
  await users[3].addProducts([products[51], [43], [32], [11], [6]]);
  await users[4].addProducts([products[1], [45], [44]]);
  await users[5].addProducts([products[4], [6], [9], [29]]);
  await users[6].addProducts([products[15], [19], [31]]);
  await users[7].addProducts([products[1], [43], [55], [46], [47]]);
  await users[8].addProducts([products[26], [37]]);

  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
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
