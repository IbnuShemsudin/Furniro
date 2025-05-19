import React from 'react'
import './Header.css'
import  banner  from '../../assets/banner.jpg'
function Header() {
  return (
    <div className="header">
        <img src={banner} alt="Banner" className="banner-image" />
        <div className="banner">
            <div className="banner-text">
                <h1>Welcome to Furniro</h1>
                <p>Your one-stop shop for all your furniture needs</p>
            </div>
        </div>
      <div className="header-content">
        <h1>Furniro</h1>
        <h2>Find the perfect furniture for your home</h2>
        <p>Shop now and enjoy exclusive discounts!</p>
        <button className="shop-now">Shop Now</button>
        <button className="learn-more">Learn More</button>       
      </div>
    </div>
  );
}

export default Header
