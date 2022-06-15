import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'
import SingleUser from './components/SingleUser'
import AllUsers from './components/AllUsers'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
