/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {Cart} from './Cart';

const adapter = new Adapter();
enzyme.configure({ adapter });

xdescribe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = shallow(<Cart />);
  });

  //page and title loads
  it('renders the page title in an h3', () => {
    expect(cart.find('h3').text()).to.be.equal('Shopping Cart');
  });
});
