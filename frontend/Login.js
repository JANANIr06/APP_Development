// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Asserts/login.css';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/log/login', {
        email,
        password,
        isAdmin
      });

      if (response.status === 201) {
        localStorage.setItem('isLoggedIn', 'true'); // Set login status in localStorage
        navigate('/home');
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        // Request made and server responded with a status code other than 2xx
        setErrorMessage(`Server responded with status ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // Request made but no response received
        setErrorMessage('No response from the server. Please try again later.');
      } else {
        // Something else went wrong
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
    handleSubmit({ preventDefault: () => {} });
  };

  const handleSocialLogin = (platform) => {
    console.log(`Logging in with ${platform}`);
    // Handle social media login logic here
  };
// src/components/Login.js

return (
  <div className="login-page">
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
        <button type="button" onClick={handleAdminLogin} disabled={isSubmitting}>
          <Link to='/loginadmin'>Login as Admin</Link>
        </button>
        <div className="social-login">
          <p>Or login with:</p>
          <div className="social-icons">
            <FaGoogle
              className="social-icon google-icon"
              onClick={() => handleSocialLogin('Google')}
              disabled={isSubmitting}
            />
            <FaFacebookF
              className="social-icon facebook-icon"
              onClick={() => handleSocialLogin('Facebook')}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </form>
      <p>If new, <Link to="/register">register here</Link></p>
    </div>
  </div>
);

  
};

export default Login;
