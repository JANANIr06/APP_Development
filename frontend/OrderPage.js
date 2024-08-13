import React, { useState } from 'react';
import './Asserts/orderpage.css';

const OrderPage = () => {
  const [orderId] = useState(Math.floor(Math.random() * 1000000));
  const [productImage] = useState('https://via.placeholder.com/100'); // Placeholder image
  const [productName] = useState('Product Name');
  const [unitPrice] = useState(500); // Example unit price
  const [quantity] = useState(1); // Example quantity
  const [shippingCharges] = useState(50); // Example shipping charges
  const [cashOnDelivery] = useState(30); // Example cash on delivery charges
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const subTotal = unitPrice * quantity;
  const grandTotal = subTotal + shippingCharges + cashOnDelivery;

  const handleSubmit = () => {
    setOrderConfirmed(true);
    setTimeout(() => {
      setOrderConfirmed(false);
    }, 3000); // Hide the message after 3 seconds
  };

  return (
    <div className="order-page">
      <div className="order-details">
        <h2>Order Details</h2>
        <p>Order ID: {orderId}</p>
        <div className="product-info">
          <img src={productImage} alt="Product" />
          <p>Product Name: {productName}</p>
        </div>
        <div className="price-details">
          <h3>Unit Price:</h3>
          <p>{`₹${unitPrice}`}</p>
          <h3>Subtotal:</h3>
          <p>{`₹${subTotal}`}</p>
          <h3>Shipping Charges:</h3>
          <p>{`₹${shippingCharges}`}</p>
          <h3>Cash on Delivery:</h3>
          <p>{`₹${cashOnDelivery}`}</p>
          <h3>Grand Total:</h3>
          <p>{`₹${grandTotal}`}</p>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {orderConfirmed && <div className="alert">Order Confirmed</div>}
      </div>
    </div>
  );
};

export default OrderPage;
