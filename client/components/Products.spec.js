/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import { Products } from './Products'

const adapter = new Adapter()
enzyme.configure({adapter})

// this needs to be checked out later
xdescribe('Products', () => {
  const getProductsSpy = sinon.spy()
  let products

  beforeEach(() => {
    products = mount(<Products />)
  })

  //page and title loads
  it('renders the page title in an h1', () => {
    expect(products.find('h1').text()).to.be.equal('Products')
  })

  //check if indvidual product title is passed
  it('renders the indvidiaul product title in an h2', () => {
    expect(products.find('h2').text()).to.be.equal('doggoDress')
  })
  //check if image is passed
  it('renders the product title in an h1', () => {
    expect(products.find('img').text()).to.be.equal('doggoDress.img')
  })
  //check for multiple products
  it('renders the product title in an h1', () => {
    expect(products.find('img').text()).to.be.equal('Products')
  })
})
