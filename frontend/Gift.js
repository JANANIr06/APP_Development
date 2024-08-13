import React from 'react';
import './Asserts/gift.css'; // Make sure to create and update this CSS file
import img1 from './Asserts/gift1.png';
import img2 from './Asserts/gift2.png';
import img3 from './Asserts/gift3.png';
import img4 from './Asserts/gift4.png';
import img5 from './Asserts/gift5.png';
import img6 from './Asserts/gift6.png';
import img7 from './Asserts/gift7.png';
import img8 from './Asserts/gift8.png';
import img9 from './Asserts/gift9.png';
import img10 from './Asserts/gift10.png';

const Gift = () => {
  return (
    <div className="gift-page">
      <div className="gift-header">
        <h1>Gift Shop</h1>
      </div>
      <div className="center-image">
        <img src={img1} alt="Center Image" className="center-img" />
      </div>
      <div className="gift-images">
        <div className="gift-row">
          <img src={img2} alt="Gift Image 2" />
          <img src={img3} alt="Gift Image 3" />
        </div>
        <div className="gift-row">
          <img src={img4} alt="Gift Image 4" />
          <img src={img5} alt="Gift Image 5" />
        </div>
        <div className="gift-row">
          <img src={img6} alt="Gift Image 6" />
          <img src={img7} alt="Gift Image 7" />
        </div>
        <div className="gift-row">
          <img src={img8} alt="Gift Image 8" />
          <img src={img9} alt="Gift Image 9" />
        </div>
        <div className="gift-row">
          <img src={img10} alt="Gift Image 10" />
        </div>
      </div>
    </div>
  );
};

export default Gift;
