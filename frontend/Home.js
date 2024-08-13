import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';
import './Asserts/home.css';
import pro1 from './Asserts/Product1.jpg';
import pro2 from './Asserts/Product2.jpg';
import pro3 from './Asserts/Product3.jpg';
import pro4 from './Asserts/Product4.jpg';
import kid1 from './Asserts/kid1.jpeg';
import kid2 from './Asserts/kid2.jpg';
import kid3 from './Asserts/kid3.jpg';
import kid4 from './Asserts/kid4.jpg';
import logo from './Asserts/logo.png';
import newImage from './Asserts/newImage.avif';
import img1 from './Asserts/img1.avif';
import img2 from './Asserts/img2.avif';
import img3 from './Asserts/img3.avif';
import img4 from './Asserts/img4.avif';
import img5 from './Asserts/img5.avif';
import img6 from './Asserts/img6.avif';
import img7 from './Asserts/img7.avif';
import img8 from './Asserts/img8.avif';
import img9 from './Asserts/img9.avif';
import img10 from './Asserts/img10.avif';
import img11 from './Asserts/img11.avif';
import img12 from './Asserts/img12.avif';
import slide1 from './Asserts/slide1.avif';
import slide2 from './Asserts/slide2.avif';
import slide3 from './Asserts/slide3.avif';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];
  const navigate = useNavigate();
  const [clickTimeout, setClickTimeout] = useState(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleLogoClick = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      navigate('/contactus'); // Navigate to Contact Us on double click
    } else {
      setClickTimeout(setTimeout(() => {
        navigate('/aboutus'); // Navigate to About Us on single click
        setClickTimeout(null);
      }, 300));
    }
  };

  return (
    <div>
      <header className="navbar">
        <div className="navbar-logo" onClick={handleLogoClick}>
          <Link to="/">
            <img src={logo} alt="Logo" />
            Toy Store
          </Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/dashboard" className="navbar-button">Dashboard</Link>
          { <Link to="/login" className="navbar-button">Login</Link> }
          {<Link to="/signup" className="navbar-button">Signup</Link> }
          <Link to="/bulkorder" className="navbar-button">Bulk Order</Link> {/* Added Bulk Order Button */}
          <div className="icon-container">
            <Link to="/cart" className="icon-link">
              <FaShoppingCart className="icon" />
            </Link>
            <Link to="/wishlist" className="icon-link">
              <FaHeart className="icon" />
            </Link>
          </div>
        </div>
      </header>
      
      <div className="search-nav-container">
        <input type="text" className="search-box" placeholder="Search..." />
        <div className="nav-buttons">
          <Link to="/category" className="nav-button">Shop by Category</Link>
          <Link to="/gift" className="nav-button">Gift Shop</Link>
          <Link to="/contactus" className="nav-button contactus-button">Contact Us</Link> {/* Added Contact Us Button */}
        </div>
      </div>

      <div className="HeaderText">
        <h1>Welcome to Our Store</h1>
        <p>Explore our range of products.</p>
      </div>

      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div className="slide" key={index} style={{ display: currentSlide === index ? 'block' : 'none' }}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="image-gallery">
        <div className="main-image">
          <img src={newImage} alt="Main Gallery Image" />
        </div>
        <div className="new-images-grid">
          <img src={img1} alt="Gallery Image 1" />
          <img src={img2} alt="Gallery Image 2" />
          <img src={img3} alt="Gallery Image 3" />
          <img src={img4} alt="Gallery Image 4" />
          <img src={img5} alt="Gallery Image 5" />
          <img src={img6} alt="Gallery Image 6" />
          <img src={img7} alt="Gallery Image 7" />
          <img src={img8} alt="Gallery Image 8" />
        </div>
      </div>

      <div className="image-gallery">
        <img src={img9} alt="Gallery Image 9" />
      </div>

      <div className="image-gallery">
        <div className="new-images-grid">
          <img src={img10} alt="Gallery Image 10" />
          <img src={img11} alt="Gallery Image 11" />
          <img src={img12} alt="Gallery Image 12" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
