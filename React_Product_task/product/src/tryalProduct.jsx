import React from "react";
const { useState } = React;
const Product = ({ product, children }) => (
  <div className="products">
    {product.name} ${product.price}
    {children}
  </div>
);

function Tryproduct() {
  const [products] = useState([
    { name: "Superman Poster", price: 10, logo: 'https://picsum.photos/150/150?1' },
    { name: "Spider Poster", price: 20, logo: 'https://picsum.photos/150/150?2' },
    { name: "Bat Poster", price: 30, logo: 'https://picsum.photos/150/150?3' }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = index => {
    setCart(cart.concat(products[index]));
  };

  const calculatePrice = () => {
    return cart.reduce((price, product) => price + product.price, 0);
  };

  return (
    <div className="App">
      <h2>Shopping cart example using React Hooks</h2>
      <hr />
      <div className="productsContainer">
        {products.map((product, index) => (
          <Product key={index} product={product}>           
            <img src={product.logo} alt="website logo" />
            
            <button onClick={() => addToCart(index)}>Add to cart</button>
          </Product>
        ))}
      </div>
      YOUR CART TOTAL: ${calculatePrice()}
      {cart.map((product, index) => (
        <Product key={index} product={product}>
          {" "}
        </Product>
      ))}
    </div>
  );
}
export default Tryproduct;