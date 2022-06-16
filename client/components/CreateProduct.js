import React from 'react';
import {createProduct} from '../store/createProduct';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      clothingType: 'shirt',
      image: '',
      petType: 'dog',
      price: undefined,
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
    const { name, clothingType, image, petType, price} = this.state;
    const { handleSubmit, handleChange} = this;
    return (
      <div className="form">
        <h1>Create a New Product</h1>
        <div>
          <form id='product-form' onSubmit={handleSubmit}>
            <button type='submit'>Save Changes</button>
            <label htmlFor='name'>Product Name: </label>
            <input name='name' onChange={handleChange} value={name} />
            <label htmlFor='clothingType'>Clothing Type: </label>
            <select name='clothingType' onChange={handleChange} value={clothingType}>
              <option value='shirt'>shirt</option>
              <option value='dress'>dress</option>
              <option value='coat'>coat</option>
              <option value='swim'>swim</option>
              <option value='shoes'>shoes</option>
              <option value='other'>other</option>
            </select>
            <label htmlFor='petType'>Pet Type </label>
            <select name='petType' onChange={handleChange} value={petType}>
              <option value='dog'>dog</option>
              <option value='cat'>cat</option>
              <option value='horse'>horse</option>
              <option value='other'>other</option>
            </select>
            <label htmlFor='price'>Price: </label>
            <input name='price' onChange={handleChange} value={price} type='number' step='.01'/>
            <label htmlFor='image'>Product Image: </label>
            <input name='image' onChange={handleChange} value={image} />
          </form>
           {/* <img src={image} /> */}
        </div>

      </div>
    )
  }
}


const mapDispatch = (dispatch) => ({
  createProduct: (product) => dispatch(createProduct(product))
});

export default connect(null, mapDispatch)(CreateProduct)
