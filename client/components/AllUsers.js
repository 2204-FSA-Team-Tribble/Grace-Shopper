import React from 'react'

const AllUsers = () => {
  // Placeholder user array
  const users = [
    {
      firstName: 'Bob',
      lastName: 'Smith',
      address: '100 Pine Rd.',
      username: 'bobthedog',
      email: 'bobthedog@gmail.com',
      password: 'ilovedogs1',
    },
    {
      firstName: 'Lisa',
      lastName: 'Frank',
      address: '311 Oak St.',
      username: 'lisafrank100',
      email: 'lisafrank100@gmail.com',
      password: 'ihatedogs1',
    },
    {
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
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th></th>
        </tr>
      {users.map((user) => {
        return (
          <tr className="user">
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
            <td><a href='#'>Edit</a></td>
            <td><a href='#'>Remove</a></td>
            <br />
          </tr>
        )
      })}
      </table>
    </div>
  )
}

export default AllUsers
