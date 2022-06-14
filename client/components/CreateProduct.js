import React from 'react';
import { connect } from 'react-redux';

export class CreateProduct extends React.Component {
  render() {
    return (
      <div>
        this is where Create Product goes.
      </div>
    )
  }
}

const mapState = () => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(CreateProduct)
