import React from 'react';
import {createProduct} from '../store/createProduct';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
    [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createProduct({...this.state});
  }
  render() {
    const {name} = this.state;
    const { handleSubmit, handleChange} = this;
    return (
      <div className="form">
        <h1>Create a New Product</h1>
        <div>
          <form id='create-product' onSubmit={handleSubmit}>
          <div className="item1">
            <label htmlFor='create-product'>Product Name: </label>
            <div>
              <input name='name' onChange={handleChange} value={name} />
            </div>

          </div>
          <div className="item2">
            <button type='submit'>Submit</button>
            <Link to='/'>Cancel</Link>
          </div>

          </form>

        </div>

      </div>
    )
  }
}


const mapDispatch = (dispatch, {history}) => ({
  createProduct: (product) => dispatch(createProduct(product))
});

export default connect(null, mapDispatch)(CreateProduct)
