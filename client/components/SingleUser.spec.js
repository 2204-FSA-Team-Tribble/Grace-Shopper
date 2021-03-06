/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SingleUser from './SingleUser'


const adapter = new Adapter()
enzyme.configure({adapter})

xdescribe('SingleUser', () => {
  let singleUser

  beforeEach(() => {
    singleUser = shallow(<SingleUser />)
  })

  it('renders the email in an h3', () => {
    expect(singleUser.find('h3').text()).to.be.equal('Edit User')
  })
})

