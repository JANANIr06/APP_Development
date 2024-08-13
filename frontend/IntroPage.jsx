import React from 'react';
import { Link } from 'react-router-dom';
import './Asserts/IntroPage.css';

const IntroPage = () => {
  const videoSrc = require('./Asserts/WhatsApp Video 2024-08-05 at 14.14.14_7f0c7d04.mp4');


  return (
    <div className="intro-container">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Link to="/login" className="intro-button">
        EXPLORE
      </Link>
    </div>
  );
};

export default IntroPage;
