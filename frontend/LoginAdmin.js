import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Asserts/loginadmin.css';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Is Admin:', isAdmin);

    // Simulate an API call
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true'); // Set login status in localStorage
      setIsSubmitting(false);
      navigate('/home');
    }, 1000);
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
    handleSubmit({ preventDefault: () => {} });
  };

  const handleSocialLogin = (platform) => {
    console.log(`Logging in with ${platform}`);
    // Handle social media login logic here
  };

  return (
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
          <Link to='/admin'>Login as Admin</Link>
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
  );
};

export default Login;
