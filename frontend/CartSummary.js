import React, { useState } from 'react';
import './Asserts/cartsummary.css';
import {Link} from 'react-router-dom';

const cartItems = [
  { id: 1, name: 'LITTLE BOOKS', qty: 1, price: 10 },
  { id: 2, name: '101 MORAL BOOKS', qty: 2, price: 20 },
  { id: 3, name: '201 STORIES', qty: 1, price: 15 },
  {id:4, name:''}
  // Add more items as needed
];

const CartSummary = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="cart-summary">
      <h1>Cart Summary</h1>
      <div className="table-container">
        <div className="table-header">
          <div className="table-cell">Serial No</div>
          <div className="table-cell">Item Name</div>
          <div className="table-cell">Qty</div>
          <div className="table-cell">Price</div>
        </div>
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="table-row"
            onClick={() => handleRowClick(item)}
          >
            <div className="table-cell">{index + 1}</div>
            <div className="table-cell">{item.name}</div>
            <div className="table-cell">{item.qty}</div>
            <div className="table-cell">${item.price}</div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="item-details">
          <h2>Item Details</h2>
          <p><strong>Name:</strong> {selectedItem.name}</p>
          <p><strong>Quantity:</strong> {selectedItem.qty}</p>
          <p><strong>Price:</strong> ${selectedItem.price}</p>
        </div>
      )}
      <button className="btn-shipping-address"><Link to='/shipping-address'>Add Shipping Address</Link></button>
    </div>
  );
};

export default CartSummary;
