import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/products.js';
import { NavLink } from 'react-router-dom';

const FilterProducts = () => {
  const [filter, setFilter] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const user = useSelector((state) => state.auth)

  useEffect(() => {
    setFilter(products);
    setisLoading(false);
    dispatch(fetchProducts());
  }, [dispatch]);

  const Loading = () => {
    return <>Loading....</>;
  };

  const filteredPets = (cat) => {
    const updatedList = products.filter((x) => x.petType === cat);
    setFilter(updatedList);
  };
  const filteredProducts = (cat) => {
    const updateCloth = products.filter((x) => x.clothingType === cat);
    setFilter(updateCloth);
  };

  return (
    <>
      <div className='container py-5'>
      <h1>Shop by Pet</h1>
        <div className='card-deck mb-3 text-center'>
          <div className='row'>
            <div className='container col home-cards'>
              <NavLink to="/dog" style={{ textDecoration: 'none' }}>
                <div className='card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal home-fonts'>Dog</h4>
                  </div>
                  <div className='card-body'>
                    <img
                      src="https://i.imgur.com/wXuQhaY.jpeg"
                      onClick={() => filteredProducts('dog')}
                      className="home-card-img-top"
                      alt="dog"
                    />
                  </div>
                </div>
              </NavLink>
            </div>
            <div className='container col home-cards'>
              <NavLink style={{ textDecoration: 'none' }} to="/cat">
                  <div className='card mb-4 shadow-sm'>
                    <div className='card-header'>
                      <h4 className='my-0 font-weight-normal home-fonts'>Cat</h4>
                    </div>
                    <div className='card-body'>
                      <img
                        src="https://i.imgur.com/j260ffV.jpeg"
                        onClick={() => filteredPets('cat')}
                        className="home-card-img-top"
                        alt="cat"
                      />
                    </div>
                  </div>
              </NavLink>
            </div>
            <div className='container col home-cards'>
              <NavLink style={{ textDecoration: 'none' }} to="/horse">
                <div className='card mb-4 shadow-sm'>
                  <div className='card-header'>
                    <h4 className='my-0 font-weight-normal home-fonts'>Horse</h4>
                  </div>
                  <div className='card-body'>
                    <img
                      src="https://i.imgur.com/tw1ikT8.jpeg"
                      onClick={() => filteredPets('horse')}
                      className="home-card-img-top"
                      alt="horse"
                    />
                  </div>
                </div>
              </NavLink>
            </div>
            <div className='container col home-cards'>
            <NavLink style={{ textDecoration: 'none' }} to="/other">
              <div className='card mb-4 shadow-sm'>
                <div className='card-header'>
                  <h4 className='my-0 font-weight-normal home-fonts'>Other</h4>
                </div>
                <div className='card-body'>
                  <img
                    src="https://i.imgur.com/yNmwWN2.jpeg"
                    onClick={() => filteredPets('other')}
                    className="home-card-img-top"
                    alt="other"
                  />
                </div>
              </div>
              </NavLink>

            </div>
          </div>

        </div>
      </div>
      <div className="container">

      <div className='container'>
        <h1>Shop by Style</h1>
        <div className='card-deck mb-3 text-center'>
          <div className='row'>
            <div className='container col home-cards'>
            <NavLink style={{ textDecoration: 'none' }} to="/#">
              <div className='card mb-4 shadow-sm'>
                <div className='card-header'>
                  <h4 className='my-0 font-weight-normal home-fonts'>Shirt</h4>
                </div>
                <div className='card-body'>
                  <img
                    src="https://i.imgur.com/uxVw82O.jpeg"
                    onClick={() => filteredProducts('shirt')}
                    className="home-card-img-top"
                    alt="shirt"
                  />
                </div>
              </div>
              </NavLink>

            </div>
            <div className='container col home-cards'>
            <NavLink style={{ textDecoration: 'none' }} to="/#">
              <div className='card mb-4 shadow-sm'>
                <div className='card-header'>
                  <h4 className='my-0 font-weight-normal home-fonts'>Coat</h4>
                </div>
                <div className='card-body'>
                  <img
                    src="https://i.imgur.com/9R3JY6n.jpeg"
                    onClick={() => filteredProducts('coat')}
                    className="home-card-img-top"
                    alt="coat"
                  />
                </div>
              </div>
              </NavLink>

            </div>
            <div className='container col home-cards'>
            <NavLink style={{ textDecoration: 'none' }} to="/#">
              <div className='card mb-4 shadow-sm'>
                <div className='card-header'>
                  <h4 className='my-0 font-weight-normal home-fonts'>Dress</h4>
                </div>
                <div className='card-body'>
                  <img
                    src="https://i.imgur.com/7GeIUeZ.jpeg"
                    onClick={() => filteredProducts('dress')}
                    className="home-card-img-top"
                    alt="dress"
                  />
                </div>
              </div>
              </NavLink>

            </div>
            <div className='container col home-cards'>
            <NavLink style={{ textDecoration: 'none' }} to="/#">
              <div className='card mb-4 shadow-sm'>
                <div className='card-header'>
                  <h4 className='my-0 font-weight-normal home-fonts'>Swim</h4>
                </div>
                <div className='card-body'>
                  <img
                    src="https://i.imgur.com/BTtJJeA.jpeg"
                    onClick={() => filteredProducts('swim')}
                    className="home-card-img-top"
                    alt="swim"
                  />
                </div>
              </div>
              </NavLink>

            </div>
            <div className='container col home-cards'>
            <NavLink style={{ textDecoration: 'none' }} to="/#">
              <div className='card mb-4 shadow-sm'>
                <div className='card-header'>
                  <h4 className='my-0 font-weight-normal home-fonts'>Shoes</h4>
                </div>
                <div className='card-body'>
                  <img
                    src="https://i.imgur.com/mCdjaHh.jpeg"
                    onClick={() => filteredProducts('shoes')}
                    className="home-card-img-top"
                    alt="shoes"
                  />
                </div>
              </div>
              </NavLink>

            </div>
            <div className='container col home-cards'>
            <NavLink style={{ textDecoration: 'none' }} to="/#">
              <div className='card mb-4 shadow-sm'>
                <div className='card-header'>
                  <h4 className='my-0 font-weight-normal home-fonts'>Other</h4>
                </div>
                <div className='card-body'>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0532/8548/6785/products/mock-golden_retriever-carolina_bluefront_1100x.jpg?v=1651885889"
                    onClick={() => filteredProducts('other')}
                    className="home-card-img-top"
                    alt="other"
                  />
                </div>
              </div>
              </NavLink>

            </div>
          </div>

        </div>
      </div>
      </div>

      {filter.map((product) => {
        return (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center p-4">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.name.substring(0, 15)}...
                </h5>
                <p className="card-text lead fw-bold">${product.price}</p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-outline-secondary"
                >
                  {user.id > -1 ? "Buy Now" : "View Item"}
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FilterProducts;
