import React from 'react'
import './browse.css'
import Browse1 from '../../assets/browse1.jpg'
import Browse2 from '../../assets/browse2.jpg'
import Browse3 from '../../assets/browse3.jpg'
function Browse() {
  return (
    <div>
        <div className="browse">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="browse-categories">
          <img src={Browse1} alt="" />
          <h2>Dinning</h2>
        </div>
        <div className="browse-categories">
          <img src={Browse2} alt="" />
          <h2>Dinning</h2>
        </div>
        <div className="browse-categories">
          <img src={Browse3} alt="" />
          <h2>Dinning</h2>
        </div>
      </div>
    </div>
  );
}

export default Browse
