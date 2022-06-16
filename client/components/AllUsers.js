import React from 'react'
import { connect } from 'react-redux'
import { setUsers } from '../store/users'

export class AllUsers extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.setUsers()
  }


  render() {
    const user = this.props.auth
    let allUsers = this.props.users

    // Sort users by Id before displaying
    function compare(a,b) {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1
      }
      return 0
    }
    allUsers.sort(compare)

    return (
      <div>
        {user.isAdmin ? (
        <div>
        <h3>All Users</h3>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Username</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => {
              return (
                <tr className="user" key={user.id}>
                  <td>{user.id}</td>
                  <td>{`${user.firstname} ${user.lastname}`}</td>
                  <td>{`${user.address}. ${user.city}, ${user.state}. ${user.zipcode}`}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>) : (<div><h3>Access Denied</h3></div>)}
      </div>
    )
  }
}

const mapState = (state) => ({
  users: state.users,
  auth: state.auth
})

const mapDispatch = (dispatch) => ({
  setUsers: () => dispatch(setUsers()),
})

export default connect(mapState, mapDispatch)(AllUsers)
