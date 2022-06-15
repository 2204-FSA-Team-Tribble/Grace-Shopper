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
    return (
      <div>
        <h3>All Users</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => {
              return (
                <tr className="user" key={user.id}>
                  {/* <td>{`${user.firstname} ${user.lastname}`}</td>
                  <td>{user.address}</td> */}
                  <td>{user.username}</td>
                  {/* <td>{user.email}</td>
                  <td>
                    {user.password
                      .split('')
                      .map((char) => '*')
                      .join('')}
                  </td> */}
                  <td>
                    <a href="#">Edit</a>
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
    )
  }
}

const mapState = (state) => ({
  users: state.users,
})

const mapDispatch = (dispatch) => ({
  setUsers: () => dispatch(setUsers()),
})

export default connect(mapState, mapDispatch)(AllUsers)
