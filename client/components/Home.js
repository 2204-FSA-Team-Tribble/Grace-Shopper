import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img src="https://i.etsystatic.com/27814626/r/il/727c2a/3155576320/il_340x270.3155576320_svla.jpg" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title dispaly-3 fw-bolder mb-0">
              NEW ARRIVALS
            </h5>
            <p className="card-text lead fs-2">WHERE YOUR PET WOULD SHOP </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
