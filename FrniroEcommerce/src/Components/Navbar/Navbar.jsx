import React from 'react'
import './Navbar.css'
import { useState } from 'react' 
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// import {search} from 'react-icons/fa'
// import { cart } from 'react-icons/fa'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
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
          <button>Account</button>
          <button>Cart</button>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="furnito_Menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="furnito_Menu_Container scale-up-center">
            <div className="furnito_Menu_Container_2">
              <ul className="furnito_Menu_Container_2_list">
                <li>
                  <a href="">Account</a>
                </li>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
