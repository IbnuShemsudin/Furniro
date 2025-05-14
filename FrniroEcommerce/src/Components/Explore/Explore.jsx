import React from 'react'
import './explore.css'

import Explore1 from '../../assets/explore1.png'
import Explore2 from '../../assets/explore2.png'
import Explore3 from '../../assets/explore3.png'
function Explore() {
  return (
    <div className="explore-container">
      <div className="explore">
        <div className="explore-header">
          <h1>50+ Beautiful rooms inspiration</h1>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button>Explore More</button>
        </div>
        <div className="explore-cards">
          <div className="explore-card">
            <img src={Explore1} alt="" />
            <h2>01.....Bed Room</h2>
            <h1>Inner Peace</h1>
          </div>
          <div className="explore-card">
            <img src={Explore2} alt="" />
            <h2>Bedroom</h2>
            <p>Cozy and comfortable bedroom design</p>
          </div>
          <div className="explore-card">
            <img src={Explore1} alt="" />
            <h2>Kitchen</h2>
            <p>Stylish and functional kitchen design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore
