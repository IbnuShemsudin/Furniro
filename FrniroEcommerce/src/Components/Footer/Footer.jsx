import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Furniro</h1>
          <p>Your one-stop shop for all your furniture needs</p>
        </div>
        <div className="all-footer">
          <div className="footer-links">
            <h2>Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-help">
            <h2>Help</h2>
            <ul>
              <li>Payment Options</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
        <p className="footer-bottom">&copy; 2023 Furniro. All rights reserved. | Designed by Your Name</p>
      
    </div>
  );
}

export default Footer
