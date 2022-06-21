import React from 'react'
import { connect } from 'react-redux'
import { setUsers } from '../store/users'
import { deleteUser } from '../store/deleteUser.js'
import { Link } from 'react-router-dom'

export class AllUsers extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.setUsers()
  }

  handleDelete(id) {
    this.props.deleteUser(id)
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
      <div className='container'>
        {user.isAdmin ? (
          <div className="table-responsive">
            <div className='row admin-top'>
              <div className='col'><h1>All Users</h1></div>
            </div>
            <table className="table table-striped table-sm">
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
                    <td>
                      <button className="btn btn-sm btn-block btn-danger" onClick={
                      (evt) => {
                          this.handleDelete(user.id);
                        }
                      }>Delete</button>
                    </td>
                    <td>
                      <Link to={`/users/${user.id}`}>
                        <button className="btn btn-sm btn-block btn-success">Update</button>
                      </Link>
                    </td>
                  </tr>

                  )})}
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

const mapDispatch = (dispatch, {history}) => ({
  setUsers: () => dispatch(setUsers()),
  deleteUser: (user) => dispatch(deleteUser(user, history))
})

export default connect(mapState, mapDispatch)(AllUsers)
