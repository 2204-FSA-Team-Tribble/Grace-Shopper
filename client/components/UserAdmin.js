import React from 'react';
import { connect } from 'react-redux';
import { setUser, _setUser } from '../store/singleUser';
import { updateUser } from '../store/updateUser'
import { Link } from 'react-router-dom'

export class UserAdmin extends React.Component {
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
    this.props.setUser(this.props.auth.id)
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
    const { handleChange, handleSubmit } = this
    const user = this.state

    return (
      <div className='container'>
        <div className="py-5 text-center">
          <h2>Update User Information</h2>
          <p className='lead'>Information changes all of the time. Maybe you moved or maybe you inputed... I mean <em>we </em>recorded it incorrectly. </p>
        </div>
        <div className='text-center'>
          <form onSubmit={handleSubmit}>
          <div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className='lead' htmlFor="firstname">First Name</label>
                <input
                  class="form-control"
                  name="firstname"
                  onChange={handleChange}
                  value={user.firstname || ''}
                />
              </div>
              <div class="col-md-6 mb-3">
                <label className='lead' htmlFor="lastName">Last Name</label>
                <input
                  class="form-control"
                  name="lastname"
                  onChange={handleChange}
                  value={user.lastname || ''}
                />
              </div>
            </div>
            <div className="row">
              <div>
              <label className='lead' htmlFor="address">Address</label>
              <input
                class="form-control"
                name="address"
                onChange={handleChange}
                value={user.address || ''}
              />
              </div>

            </div>
          </div>
            <div className="input">
            </div>
            <div className="input">
              <label className='lead' htmlFor="username">Username</label>
              <input
                class="form-control"
                name="username"
                onChange={handleChange}
                value={user.username || ''}
              />
            </div>
            <div className="input">
              <label className='lead' htmlFor="email">Email</label>
              <input
                class="form-control"
                name="email"
                onChange={handleChange}
                // type="email"
                value={user.email || ''}
              />
            </div>
            <div>
              <div>
                <button type="submit" className="btn btn-lg btn-block btn-success">Submit</button>
              </div>
              <div>
                <Link to="/loginredirect"><button type="button" className="btn btn-lg btn-block btn-warning">Cancel</button></Link>
              </div>
            </div>
            {this.state.invalidSubmission ? (
              <h2>Please enter a username!</h2>
            ) : (
              <br />
            )}
          </form>
        </div>
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

export default connect(mapState, mapDispatch)(UserAdmin)
