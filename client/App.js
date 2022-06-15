import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'
import SingleUser from './components/SingleUser'
import AllUsers from './components/AllUsers'
import Cart from './components/Cart'
import CartLink from './components/CartLink'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <CartLink />
    </div>
  )
}

export default App
