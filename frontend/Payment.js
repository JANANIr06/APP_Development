import React, { useState } from 'react';
import './Asserts/payment.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    cvv: '',
    ph: '',
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/payment/submit', paymentDetails);
      alert('Order placed successfully.');
      console.log(response.data); // Check the response for debugging purposes
    } catch (error) {
      console.error('There was an error processing the payment!', error);
      alert('Failed to process the payment.');
    }
  };

  return (
    <div className="payment-page">
      <br />
      <h1>Payment Page</h1>
      <div className="payment-form">
        <h2>Enter Payment Details</h2>
        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nameOnCard">Name on Card</label>
            <input
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              placeholder="John Doe"
              value={paymentDetails.nameOnCard}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={paymentDetails.cvv}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ph">Phone Number</label>
            <input
              type="text"
              id="ph"
              name="ph"
              placeholder="0987654321"
              value={paymentDetails.ph}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit"><Link to="/orderpage">Submit</Link></button>
          <button type="button" onClick={handlePayment}>Cash on Delivery</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
