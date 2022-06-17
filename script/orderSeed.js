const OrderSeed = [
  {
    total: 19.99,
    status: 'cart',
    firstname: 'Cody',
    lastname: 'Smith',
    address: '171 Wallace Blvd Apt.6Z',
    city: 'Atlanta',
    state: 'GA',
    zipcode: 34093,
    email: 'codythecoder@gmail.com',
  },
  {
    total: 100,
    status: 'cart',
    firstname: 'Emmanuel',
    lastname: 'Independent',
    address: '2345 Besthomes Rd',
    city: 'OakWood',
    state: 'OK',
    zipcode: 20970,
    email: 'mannycooldude@yahoo.com',
  },
  {
    total: 7.99,
    status: 'cart',
    firstname: 'Shirley',
    lastname: 'GoodLuck',
    address: 'Milky Homes Apt. 9J',
    city: 'Burlington',
    state: 'IA',
    zipcode: 38970,
    email: 'shirlythebossb@yahoo.com',
  },

];

module.exports = OrderSeed;

let template = {
  total: 1,
  status: 'cart/complete',
  firstname: '',
  lastname: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
};
