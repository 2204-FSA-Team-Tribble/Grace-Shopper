import React from 'react';
import { connect } from 'react-redux';

// *** COMPONENT ***

export const Products = props => {
  return (
    <div>
      <h1>here are the products!</h1>
    </div>
  )
}

//*** CONTAINER ***
const mapState = state => {
  return {

  }
}

export default connect(mapState)(Products)
