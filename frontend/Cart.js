// src/Components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
// import './Asserts/cart.css'; // Create this CSS file for styling the cart

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1 className="page-heading">My Cart</h1>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
            <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
