import React from 'react'
import './Products.css'
import product1 from '../../assets/product1.png'
function Products() {
  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="products-container">
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h2>Syltherine</h2>
          <p>Stylish cafe chair</p>
          <p>Rp 2.500.000</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h2>Syltherine</h2>
          <p>Stylish cafe chair</p>
          <p>Rp 2.500.000</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h2>Syltherine</h2>
          <p>Stylish cafe chair</p>
          <p>Rp 2.500.000</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h2>Syltherine</h2>
          <p>Stylish cafe chair</p>
          <p>Rp 2.500.000</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="products-container">
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h2>Syltherine</h2>
          <p>Stylish cafe chair</p>
          <p>Rp 2.500.000</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h2>Syltherine</h2>
          <p>Stylish cafe chair</p>
          <p>Rp 2.500.000</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h2>Syltherine</h2>
          <p>Stylish cafe chair</p>
          <p>Rp 2.500.000</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h2>Syltherine</h2>
          <p>Stylish cafe chair</p>
          <p>Rp 2.500.000</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <button className='show-more'>Show more</button>
    </div>
  );
}

export default Products


// import React from 'react';
// import './Products.css';

// function ProductCard({ image, title, description, price }) {
//   return (
//     <div className="product-card">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <p>{price}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// }

// function Products({ products }) {
//   return (
//     <div className="products">
//       <h1>Our Products</h1>
//       <div className="products-container">
//         {products.map((product, index) => (
//           <ProductCard 
//             key={index} 
//             image={product.image} 
//             title={product.title} 
//             description={product.description} 
//             price={product.price} 
//           />
//         ))}
//       </div>
//       <button className='show-more'>Show more</button>
//     </div>
//   );
// }

// export default Products;