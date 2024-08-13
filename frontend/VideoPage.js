import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Asserts/videopage.css';

const VideoPage = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000); // Show button after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  
  const handleExploreClick = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src="/your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1 className="welcome-text">Welcome to ToyMarche</h1>
        {showButton && <button className="explore-button" onClick={handleExploreClick}>EXPLORE NOW</button>}
      </div>
    </div>
  );
};

export default VideoPage;
