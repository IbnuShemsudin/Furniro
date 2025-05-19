import React from 'react'
import './furniture.css'
import Furniture1 from '../../assets/furniture1.png'
import Furniture2 from '../../assets/furniture2.png'
import Furniture3 from '../../assets/furniture3.png'    
import Furniture4 from '../../assets/furniture4.png'
import Furniture5 from '../../assets/furniture5.png'
import Furniture6 from '../../assets/furniture6.png'
import Furniture7 from '../../assets/furniture7.png'
import Furniture8 from '../../assets/furniture8.png'
import Furniture9 from '../../assets/furniture9.png'
function Furniture() {
  return (
    <div className="furniture-container">
      <h3>Share your setup with</h3>
      <h1>#FuniroFurniture</h1>
      <div className="furniture-cards">
        <img src={Furniture1} alt="" />
        <img src={Furniture2} alt="" />
      </div>

      <div className="furniture-cards">
        <img src={Furniture3} alt="" />
        <img src={Furniture4} alt="" />     
       </div>
      <div className="furniture-cards"></div>
      <div className="furniture-cards">
        <img src={Furniture5} alt="" />
      </div>
      <div className="furniture-cards">
        <img src={Furniture6} alt="" />
      </div>
      <div className="furniture-cards">
        <img src={Furniture7} alt="" />
      </div>
      <div className="furniture-cards">
        <img src={Furniture8} alt="" />
      </div>
      <div className="furniture-cards">
        <img src={Furniture9} alt="" />
      </div>
    </div>
  );
}

export default Furniture
