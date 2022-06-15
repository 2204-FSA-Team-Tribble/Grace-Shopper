import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setUser, _setUser } from '../store/singleUser'
import Cart from './Cart'

// Placeholder User
const testUser = {
  id: 1,
  firstname: 'Bob',
  lastname: 'Smith',
  address: '100 Pine Rd.',
  username: 'bobthedog',
  email: 'bobthedog@gmail.com',
  password: 'ilovedogs1',
}

export class SingleUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      firstname: '',
      lastname: '',
      address: '',
      username: '',
      email: '',
      invalidSubmission: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.setUser(1) // CHANGE ID LATER
    this.setState({
      id: this.props.user.id,
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      address: this.props.user.address,
      username: this.props.user.username,
      email: this.props.user.email,
    })
  }

  componentWillUnmount() {
    this.props.clearUser()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.setState({
        id: this.props.user.id,
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
        address: this.props.user.address,
        username: this.props.user.username,
        email: this.props.user.email,
      })
    }
  }

  handleChange = (event) => {
    let newValue = event.target.value
    this.setState({
      [event.target.name]: newValue
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // Prevent empty username and displays message
    if (!this.state.username) {
      this.setState({ invalidSubmission: true})
    } else {
      this.setState({ invalidSubmission: false})
      // this.props.updateUser({...this.state})
    }
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const user = this.state

    return (
      <div>
        <h3>Edit User</h3>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="firstname">First Name</label>
            <input
              name="firstname"
              onChange={handleChange}
              value={user.firstname || ''}
            />
          </div>
          <div className="input">
            <label htmlFor="lastname">Last Name</label>
            <input
              name="lastname"
              onChange={handleChange}
              value={user.lastname || ''}
            />
          </div>
          <div className="input">
            <label htmlFor="address">Address</label>
            <input
              name="address"
              onChange={handleChange}
              value={user.address || ''}
            />
          </div>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              onChange={handleChange}
              value={user.username || ''}
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              name="name"
              onChange={handleChange}
              type="email"
              value={user.email || ''}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button">Back</button>
          </div>
          {this.state.invalidSubmission ? (
            <h2>Please enter a username!</h2>
          ) : (
            <br />
          )}
        </form>
        <Cart />
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
})

const mapDispatch = (dispatch) => ({
  setUser: (id) => dispatch(setUser(id)),
  // updateUser: (id) => dispatch(updateUser(id)),
  clearUser: () => _setUser({}),
})

export default connect(mapState, mapDispatch)(SingleUser)
