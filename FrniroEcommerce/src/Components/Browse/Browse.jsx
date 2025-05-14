import React from 'react'
import './browse.css'
import Browse1 from "../../assets/browse1.png"
import Browse2 from "../../assets/browse2.png"
import Browse3 from '../../assets/browse3.png'
function Browse() {
  return (
    <div className="browse-container">
      <h1>Browse The Range</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="browse">
        <div className="browse-categories">
          <img src={Browse2} alt="" />
          <h2>Dinning</h2>
        </div>
        <div className="browse-categories">
          <img src={Browse2} alt="" />
          <h2>Dinning</h2>
        </div>
        <div className="browse-categories">
          <img src={Browse2} alt="" />
          <h2>Dinning</h2>
        </div>
        {/* <div className="browse-categories">
          <img src={Browse3} alt="" />
          <h2>Dinning</h2>
        </div> */}
      </div>
    </div>
  );
}

export default Browse
