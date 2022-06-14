import React from 'react'
import { connect } from 'react-redux'

const AllUsers = () => {
  // Placeholder user array
  const users = [
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Smith',
      address: '100 Pine Rd.',
      username: 'bobthedog',
      email: 'bobthedog@gmail.com',
      password: 'ilovedogs1',
    },
    {
      id: 2,
      firstName: 'Lisa',
      lastName: 'Frank',
      address: '311 Oak St.',
      username: 'lisafrank100',
      email: 'lisafrank100@gmail.com',
      password: 'ihatedogs1',
    },
    {
      id: 3,
      firstName: 'Sarah',
      lastName: 'Frank',
      address: '311 Oak St.',
      username: 'sarahfrank100',
      email: 'sarahfrank100@gmail.com',
      password: 'ilovecats1',
    },
  ]

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
          {users.map((user) => {
            return (
              <tr className="user" key={user.id}>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.address}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.password
                    .split('')
                    .map((char) => '*')
                    .join('')}
                </td>
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

const mapState = (state) => ({
  users: state.users,
})

export default connect(mapState, null)(AllUsers);
