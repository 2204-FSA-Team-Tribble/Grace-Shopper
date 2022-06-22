import React from 'react';
import Products from './Products';
import FilterProducts from './FilterProducts';

const Home = () => {
  return (
    <div className="hero container">
      <div className="card bg-dark">
        <img
          src="https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3529479-center-1"
          className="card-img cover-dog"
          alt="https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3529479-center-1"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW ARRIVALS
            </h5>
            <p className="card-text lead fs-2">WHERE YOUR PET WOULD SHOP </p>
          </div>
        </div>
      </div>
      <div>
        <FilterProducts />
      </div>
    </div>
  );
};

export default Home;
