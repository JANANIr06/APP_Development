import React, { useState } from 'react';
import './Asserts/category.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const cardImages = [
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66ab72349b3deda93228327e/9788184517231_1-1-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a4adbb35f70da7909ef8e/9789388416375_01-1-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a5880b35f70da790bb0ac/9789388416399_01-1-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669a49eca2e791bef29a923d/9789394767577_1-scaled-1-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/668686d1b60678c268979cc7/9789358065596_1-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66269e2e6ee6c5c8a135d81f/blix-marble-run-2-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6583d4829544b502bfbbafb5/1-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63a1a88f0e08ea67598690db/shifutunes-6-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63d7f40d90956b0135abb92b/sm1192-sm-mega-science-kit-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/661426e8939c1f99f27ef0e6/8-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66499b65d184f8b765fb4720/skill407ffus-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/65a04936f9f5f9585ee45b44/bnp100016-1-480x480.jpeg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/649c6cb8c8498999271545d1/9788119091171_1-1-480x480.jpeg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/634af5380df2d54c45e08d43/webby-build-and-paint-wooden-bird-house-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62f2585189e9d289b47984ad/mp46-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6683ee2f7288de5e7bca4397/9789395588126_1-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6683ecf9825cd05ee7d6e686/9789395588041_1-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/666ae138d652a0acfe13f6e9/91lxlyt61wl-_sl1500_-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/664a4031c0a0d8ba235e1cf2/truzo-tumble-tower_-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662e56c5efc4edca7377384f/31144-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662e456befc4edca7375f044/76257-480x480.jpg',
  'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/640a151cd0747db9e1efe17b/m38-b0807-fire-helicopter-1-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/66635e12573325df46812f36/se7619-480x480.jpeg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64c16d1a251347d843619480/16-480x480.png',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/652a6d1ce39b7e9f366a93d5/majorette-monster-rockerz-ford-fire-rescue-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/664a4031c0a0d8ba235e1cf2/truzo-tumble-tower_-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/667d79f590dc566cccf71b44/5-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6522f1d2147247470df53e2b/toykraft-magnetic-sudoku-farm-6x6-sudoku-puzzle-480x480.png',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63236279d2c789076aee1fc6/rw-fishing-game-1199-blue-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62efff8061761476ce0c65a1/zigyasaw-alphabets-giant-floor-puzzle-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/622f8fdd0dec8455e9f18234/1-480x480.png',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/60d9a7b7b212a60d3c8197f5/l-23k-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62cbc50d3492ec9e313b3e49/miko-3-480x480.jpeg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/62495c6f5dd839dfa8b33237/smartivity-mechanical-hand-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/60c60263bedfea6b5ec00794/bcre001_1-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669e4bec408f645239ddf343/1-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/669d5e759908afb105ffdab6/28394-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662dfb68ea7104d505fc7b59/jerrycushion-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6606c51a15f5fb2b71f371d7/tom_pillow-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63c8f9f31d61ca036c90a2b6/md1001-1-480x480.webp',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/63f8f1235f6ab14cc2458c74/ok-play-2-in-1-1-480x480.jpeg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/5fb7fe5f947fef32ab55a0d7/3220-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/655b0c79e80c167d32ea7ffd/00334-1-480x480.jpeg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64104c6464fe6822d1edd50c/zoozi-basketball-480x480.jpeg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/632c5b02ddb51954340c3542/1-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/61bd95fc3ab6ffb85876dea4/activity-walker_5-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/662e966f111d0681ad0a3e55/9781408855669-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/651286e5d5898077102939a9/493174281-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/651d9123b0863239a922b953/b9945_hulk-1-480x480.jpg',
'https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6631d719f75d0e81de36fcde/f0522_cap-2-480x480.jpg',
  // (Your image URLs)
];

const cardNames = [
  'LITTLE BOOKS', '101 MORAL BOOKS', '201 STORIES', 'UNICORN STORIES BOOK',
  'AI ACTIVITY BOOK', 'BIX BUILDING BLOCKS', 'BIX ROBOTICS BLOCKS', 'PLUGO MUSIC BOARD', '108 EXP BOOK', 
  'DREAM ART & CRAFT', 'FOILFUN BUILDING BLOCKS', 'BUILDHOUSE PUZZLES AND BOARD GAMES', 'VEL ART & CRAFT', 'NEST HOUSE TOYS', 
  'REDFORT BUILDING BLOCKS', 'DREAM SCIENCE BOOK', 'MATHS ACTBOOK', 'SECRET BOOKS', 'BUILDING BLOCKS', 
  'LEGOPARROT BUILDING BLOCKS', 'MARVELSTUNT BUILDING BLOCKS', 'HELIPKIT PUZZLES AND BOARD GAMES', 'GAMEKIT BUILDING BLOCKS', 'YCUP BOTWAT', 
  'MAJORETTEKIT PUZZLES AND BOARD GAMES', ' BUILDING BLOCKS', 'SCHOOLING', 'SUDOKU PUZZLES AND BOARD GAMES', 'SOUND OUT', 
  'ALPHA BET', 'CHESS', 'NUM BER', 'TALK ROBOTICS', 'HAND ROBOTICS', 
  'STEM BOX', 'LITTLE BIRD', 'RED NOSE TOYS3', 'JERRY TOYS', 'TOM TOYS', 
  'DOLL', 'SWING AND SLIDE', 'BAT STEMP', 'YAMAHA BIKE', 'BASKET KIT', 
  'TRACT KIT', 'SLIDE WAVE', 'HARRY BOOK', 'BFF KIT', 'AVENGERS MASK'
  // (Your card names)
];

const prices = [
  100,200,550,780,890,920,499,899,729,639,619,731,4000,5999,
  199,455,777,299,70,366,799,520,401,444,10999,555,749,837,
  299,149,999,129,100000,50000,6000,729,4999,7000000,5999,
1299,3999,999,49999,3999,5999,2999,420,599,
29
];

const CategoryPage = () => {
  const [cartMessage, setCartMessage] = useState('');
  const [wishlistMessage, setWishlistMessage] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAge, setSelectedAge] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setCartMessage('Item added to cart successfully');
    setTimeout(() => setCartMessage(''), 3000);
  };

  const handleAddToWishlist = () => {
    setWishlistMessage('Item added to wishlist successfully');
    setTimeout(() => setWishlistMessage(''), 3000);
  };

  const handlePriceChange = (e) => {
    setPriceRange({
      ...priceRange,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setSelectedAge(prevState =>
      prevState.includes(value)
        ? prevState.filter(age => age !== value)
        : [...prevState, value]
    );
  };

  const filteredCards = cardNames.map((name, index) => {
    const price = prices[index];
    const withinPriceRange =
      (priceRange.min === '' || price >= Number(priceRange.min)) &&
      (priceRange.max === '' || price <= Number(priceRange.max));
    const withinCategory =
      selectedCategory === '' ||
      name.toLowerCase().includes(selectedCategory.toLowerCase());

    return withinPriceRange && withinCategory;
  });

  const handleBuyNowClick = () => {
    navigate('/buynow');
  };

  return (
    <div className="category-page">
      <aside className="sidebar">
        <h3 className="bold-text">Categories</h3>
        <ul>
          <li onClick={() => handleCategoryClick('Toys')}>Educational Toys</li>
          <li onClick={() => handleCategoryClick('Art & Craft')}>Art & Craft</li>
          <li onClick={() => handleCategoryClick('Books')}>Books</li>
          <li onClick={() => handleCategoryClick('Building Blocks')}>Building Blocks</li>
          <li onClick={() => handleCategoryClick('Puzzles & Board Games')}>Puzzles & Board Games</li>
          <li onClick={() => handleCategoryClick('Robotics')}>Robotics</li>
          <li onClick={() => handleCategoryClick('')}>All</li>
        </ul>

        <h3 className="bold-text">Price</h3>
        <input
          type="number"
          name="min"
          placeholder="From"
          value={priceRange.min}
          onChange={handlePriceChange}
        />
        -
        <input
          type="number"
          name="max"
          placeholder="To"
          value={priceRange.max}
          onChange={handlePriceChange}
        />

        <h3 className="bold-text">Age</h3>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="2-5"
              checked={selectedAge.includes('2-5')}
              onChange={handleAgeChange}
            />
            2 to 5 Years
          </label>
          <label>
            <input
              type="checkbox"
              value="5-9"
              checked={selectedAge.includes('5-9')}
              onChange={handleAgeChange}
            />
            5 to 9 Years
          </label>
          <label>
            <input
              type="checkbox"
              value="9+"
              checked={selectedAge.includes('9+')}
              onChange={handleAgeChange}
            />
            9 Years +
          </label>
        </div>
      </aside>

      <main className="main-content">
        <div className="card-grid">
          {filteredCards.map((isVisible, index) => (
            isVisible && (
              <div className="card" key={index}>
                <img src={cardImages[index % cardImages.length]} alt={`Product ${index + 1}`} />
                <h4>{cardNames[index]}</h4>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="star">&#9733;</span>
                  ))}
                </div>
                <div className="price">$ {prices[index]}</div>
                <div className="card-icons">
                  <FaShoppingCart
                    className="icon cart-icon"
                    onClick={handleAddToCart}
                  />
                  <FaHeart
                    className="icon wishlist-icon"
                    onClick={handleAddToWishlist}
                  />
                </div>
                <button className="btn-buy-now" onClick={handleBuyNowClick}>
                  <Link to='/cartsummary'>Buy Now</Link>
                </button>
              </div>
            )
          ))}
        </div>
      </main>

      {cartMessage && <div className="notification cart">{cartMessage}</div>}
      {wishlistMessage && <div className="notification wishlist">{wishlistMessage}</div>}
    </div>
  );
};

export default CategoryPage;
