import React from 'react';
import { updateProduct } from '../store/updateProduct.js';
import {fetchProduct} from '../store/singleProduct.js';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class SingleProductAdmin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.product.product.id || '',
      name: this.props.product.product.name || '',
      clothingType: this.props.product.product.clothingType || '',
      image: this.props.product.product.image || '',
      petType: this.props.product.product.petType || '',
      price: this.props.product.product.price || undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
    this.setState({
          id: this.props.product.product.id || '',
          name: this.props.product.product.name || '',
          clothingType: this.props.product.product.clothingType || '',
          image: this.props.product.product.image || '',
          petType: this.props.product.product.petType || '',
          price: this.props.product.product.price || undefined,
        })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.product.id !== this.props.product.product.id) {
      this.setState({
        id: this.props.product.product.id || '',
        name: this.props.product.product.name || '',
        clothingType: this.props.product.product.clothingType || '',
        image: this.props.product.product.image || '',
        petType: this.props.product.product.petType || '',
        price: this.props.product.product.price || null,
      })
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProduct({...this.props.product, ...this.state})
  }

  render() {
    let product = this.props.product.product || {}
    const { name, clothingType, image, petType, price} = this.state;
    const {handleChange, handleSubmit} = this;

    return (
      <div>
        <h1>Update Product</h1>
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
           <img src={image} />
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {product: state.singleProduct};
};

const mapDispatch = (dispatch) => {
  return {
    updateProduct: (product) => dispatch(updateProduct(product)),
    fetchProduct: (id) => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProductAdmin)
