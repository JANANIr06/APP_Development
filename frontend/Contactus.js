import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './Asserts/contactus.css';

const ContactUs = () => {
  // State to handle form data and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCode: '+91',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:8080/api/contact/submit1', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Your message has been sent successfully.');
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          phoneCode: '+91',
          phone: '',
          message: '',
        });
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error.response ? error.response.data : error.message);
      setError('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Our Location</h2>
          <div className="contact-item">
            <h3>Address</h3>
            <p>Toy Marche</p>
            <p>Registered Addr: Greenwood City, Sector 45</p>
            <p>Gurgaon-122002, Haryana</p>
            <p>IN</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>toymarche@toymarche.com</p>
          </div>
          <div className="contact-item">
            <h3>Telephone</h3>
            <p>+918010332222</p>
          </div>
          <div className="contact-item">
            <h3>Whatsapp</h3>
            <p>+919643592828 &nbsp;&nbsp;&nbsp; +919625992828</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Form</h2>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="phone-number">
                <select
                  id="phone-code"
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
