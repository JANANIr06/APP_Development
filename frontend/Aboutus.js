import React from 'react';
import './Asserts/aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>Toys are an integral part of growing up. In today's busy world, we want to meet all the demands of our children. This burdens our pockets and we find too many toys piled up in our cabinets and not being played with anymore. Conceptualized by parents of two kids, we are attempting to address all these concerns with Toy Marche.</p>
        <p>Toy Marche is a unique platform that caters to everything related to your toy needs. Our online store contains toys from a plethora of your favorite brands that are safe and non-toxic to children. In addition to buying toys from your favorite brands, Toy Marche enables you to sell these toys back to us when your child has stopped playing with them or has outgrown the toy. Not only that, even if you have not purchased the toys from us, you can still sell them to us. In this process, you earn piggy bank points that can be used for buying more new toys, books, and puzzles!</p>
        <p>We understand constant supply of new toys can be very burdening on the pocket. Hence, Toy Marche also has a collection of renewed toys which are much cheaper than new ones. Renewed toys in our collection have undergone a rigorous cleaning and repair process which makes them as good as new but very easy on the pocket. We will be launching these toys very soon.</p>
        <p>At Toy Marche, we believe every child deserves a toy, even the underprivileged children who cannot afford to buy toys. Our platform also enables you to donate toys to underprivileged children. You also earn piggy bank points while supporting a noble cause.</p>
        <p>What if your toys are damaged? Don't worry, you can also use our platform to give your toys away for recycling and earn store credit in your piggy bank. Isn’t it great that your children can learn about reducing carbon footprint so early in their lives while making money in their piggy banks to buy more toys?</p>
        <p>Happy shopping!</p>
      </div>
      <footer className="about-us-footer">
        <div className="footer-section">
          <h2>POLICIES</h2>
          <ul>
            <li>Terms of Sale</li>
            <li>Buyback & Sell Policy</li>
            <li>Returns, Cancellation & Refunds Policy</li>
            <li>Payment Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>INFORMATION</h2>
          <ul>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>ACCOUNT</h2>
          <ul>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Piggy Bank</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>ADDRESS</h2>
          <p>Toy Marche</p>
          <p>Registered Addr: Greenwood City, Sector 45</p>
          <p>Gurgaon</p>
          <p>Haryana 122002</p>
          <p>IN</p>
        </div>
        <div className="footer-section">
          <h2>NEWSLETTER</h2>
          <p>Subscribe to get Email Updates!</p>
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
