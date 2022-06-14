import React from 'react';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'

const SingleUser = () => {
  const [user, setUser] = useState({})

  // Placeholder User
  const testUser =  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Smith',
    address: '100 Pine Rd.',
    username: 'bobthedog',
    email: 'bobthedog@gmail.com',
    password: 'ilovedogs1',
  }

  // Assign user to state, dispatch will go here
  useEffect(() => {
    setUser(testUser)
  }, [])

  const handleChange = (event) => {
    let newValue = event.target.value
    let newUser = {...user}
    newUser[event.target.name] = newValue
    setUser(newUser)
  }

  // Add handle submit to modify user information on server

  return (
    <div>
      <form>
        <div className="input">
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" onChange={handleChange} value={user.firstName || ''} />
        </div>
        <div className="input">
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" onChange={handleChange} value={user.lastName || ''} />
        </div>
        <div className="input">
          <label htmlFor="address">Address</label>
          <input name="address" onChange={handleChange} value={user.address || ''} />
        </div>
        <div className="input">
          <label htmlFor="username">Username</label>
          <input name="username" onChange={handleChange} value={user.username || ''} />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input name="name" onChange={handleChange} type="email" value={user.email || ''} />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input name="password" onChange={handleChange} type="password" value = {user.password || ''} />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button">Back</button>
        </div>
      </form>
    </div>
  )
}

const mapState = (state) => ({
  user: state.user
})

const mapDispatch = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id))
})

export default connect(mapState, mapDispatch)(SingleUser)
