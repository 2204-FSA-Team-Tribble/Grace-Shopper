import React from 'react'
import { connect } from 'react-redux'
import { setUser, _setUser } from '../store/singleUser'
import { updateUser } from '../store/updateUser'
import { Link } from 'react-router-dom'

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.setUser(this.props.match.params.id)
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
      [event.target.name]: newValue,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateUser({...this.props.user, ...this.state})
  }

  render() {
    const authUser = this.props.auth
    const { handleChange, handleSubmit } = this
    const user = this.state

    return (
      <div>
        {authUser.isAdmin ? (
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
                <Link to="/users"><button type="button">Back</button></Link>
              </div>
              {this.state.invalidSubmission ? (
                <h2>Please enter a username!</h2>
              ) : (
                <br />
              )}
            </form>
          </div>
        ) : (
          <div>
            <h3>Access Denied</h3>
          </div>
        )}
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  auth: state.auth,
})

const mapDispatch = (dispatch, {history}) => ({
  setUser: (id) => dispatch(setUser(id)),
  updateUser: (user) => dispatch(updateUser(user, history)),
  clearUser: () => _setUser({}),
})

export default connect(mapState, mapDispatch)(SingleUser)
