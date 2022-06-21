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
      description: this.props.product.product.description || '',
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
          description: this.props.product.product.description  || '',
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
        description: this.props.product.product.description  || '',
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
    const { name, clothingType, description, image, petType, price} = this.state;
    const {handleChange, handleSubmit} = this;
    const user = this.props.auth

    return (
      <div className='container'>
        {user.isAdmin ? (<div>
          <div className='row admin-top'>
            <div className='col'><h1>Update Product</h1></div>
            <div className='col'><Link to="/productsadmin"><button className="btn btn-md btn-block btn-primary admin-right-button">Cancel</button></Link></div>
          </div>
        <div className='text-center'>
          <form id='product-form' onSubmit={handleSubmit}>
            <label className='lead' htmlFor='name'>Product Name: </label>
            <input class="form-control" name='name' onChange={handleChange} value={name} />
            <label className='lead' htmlFor='clothingType'>Clothing Type: </label>
            <select class="form-control" name='clothingType' onChange={handleChange} value={clothingType}>
              <option value='shirt'>shirt</option>
              <option value='dress'>dress</option>
              <option value='coat'>coat</option>
              <option value='swim'>swim</option>
              <option value='shoes'>shoes</option>
              <option value='other'>other</option>
            </select>
            <label className='lead' htmlFor='petType'>Pet Type </label>
            <select class="form-control" name='petType' onChange={handleChange} value={petType}>
              <option value='dog'>dog</option>
              <option value='cat'>cat</option>
              <option value='horse'>horse</option>
              <option value='other'>other</option>
            </select>
            <label className='lead' htmlFor='price'>Price: </label>
            <input class="form-control" name='price' onChange={handleChange} value={price} type='number' step='.01'/>
            <label className='lead' htmlFor='image'>Product Image: </label>
            <input class="form-control" name='image' onChange={handleChange} value={image} />
            <label className='lead' htmlFor='description'>Product Description: </label>
            <input class="form-control" name='description' onChange={handleChange} value={description} />
            <button type="submit" className="btn btn-lg btn-block btn-success">Submit</button>
          </form>
           <img src={image} />
        </div>
      </div>) : (
          <div>
            <h1>
              Access Denied
            </h1>
          </div>
        ) }
      </div>

    )
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
    auth: state.auth
  };
};

const mapDispatch = (dispatch, {history}) => {
  return {
    updateProduct: (product) => dispatch(updateProduct(product, history)),
    fetchProduct: (id) => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProductAdmin)
