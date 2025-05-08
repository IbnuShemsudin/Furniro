import React from 'react'
import './Navbar.css'
import { useState } from 'react' 
// import {search} from 'react-icons/fa'
// import { cart } from 'react-icons/fa'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Furniro</h1>
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div>
          <button>Search</button>
          <button>Cart</button>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
