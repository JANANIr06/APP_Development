import React, { useState } from 'react';
import axios from 'axios';
import sampleImage from './Asserts/sampleImage.avif';
import './Asserts/bulkorder.css';

const BulkOrderPage = ({ onBackToMain }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    gstNumber: '',
    state: '',
    city: '',
    pinCode: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);

      const response = await axios.post('http://localhost:8080/api/bulkorder/submit', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert('Your bulk order request has been submitted.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '+91',
          gstNumber: '',
          state: '',
          city: '',
          pinCode: '',
          message: '',
        });
      } else {
        console.error('Unexpected response status:', response.status);
        setError('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting bulk order:', error.response ? error.response.data : error.message);
      setError('There was an error submitting your bulk order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bulk-order-container">
      <div className="back-arrow" onClick={onBackToMain}>
        &larr;
      </div>
      <h1 className="bulk-order-title">BULKYY ORDERS</h1>
      <p className="bulk-order-subtitle">We will get back to you as soon as possible.</p>
      <div className="bulk-order-content">
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit} className="bulk-order-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone *</label>
              <div className="phone-input">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>GST Number</label>
              <input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Pin Code *</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <div className="bulk-order-image-container">
          <img src={sampleImage} alt="Bulk Order" className="bulk-order-image" />
          <div className="slider-button">&rarr;</div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrderPage;
