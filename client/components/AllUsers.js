import React from 'react'
import { connect } from 'react-redux'
import { setUsers } from '../store/users'
import { Link } from 'react-router-dom'

export class AllUsers extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.setUsers()
  }

  render() {
    const authUser = this.props.auth

    return (
      <div>
        {authUser.isAdmin ? (
          <div>
            <h3>All Users</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Username</th>
                  <th>Email</th>
                  {/* <th>Account Type</th> */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.map((user) => {
                  return (
                    <tr className="user" key={user.id}>
                      <td>{`${user.firstname} ${user.lastname}`}</td>
                  <td>{`${user.address}. ${user.city}, ${user.state}. ${user.zipcode}`}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      {/* <td>{user.isAdmin ? 'Admin' : 'Customer'}</td> */}
                      <td>
                        <Link to={`/users/${user.id}`}>Edit</Link>
                      </td>
                      <td>
                        <a href="#">Remove</a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
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
  users: state.users,
  auth: state.auth,
})

const mapDispatch = (dispatch) => ({
  setUsers: () => dispatch(setUsers()),
})

export default connect(mapState, mapDispatch)(AllUsers)
