/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {AllUsers} from './AllUsers';

const adapter = new Adapter();
enzyme.configure({ adapter });

xdescribe('AllUsers', () => {
  let allUsers;

  beforeEach(() => {
    allUsers = shallow(<AllUsers />);
  });

  //page and title loads
  it('renders the page title in an h3', () => {
    expect(allUsers.find('h3').text()).to.be.equal('All Users');
  });

   //table heading
   it('renders table headers', () => {
    expect(allUsers.find('th').text()).to.be.equal('Name');
  });
});
