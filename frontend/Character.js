import React, { useContext } from 'react';
import './Asserts/wooden.css';
import { CartContext } from './CartContext';

import c1 from './Asserts/c1.jpg';
import c2 from './Asserts/c2.jpeg';
import c3 from './Asserts/c3.jpg';
import c4 from './Asserts/c4.jpg';
import c5 from './Asserts/c5.jpg';
import c6 from './Asserts/c6.jpg';
import c7 from './Asserts/c7.jpg';
import c8 from './Asserts/c8.jpg';

const a = [
  { name: 'Doremon', description: 'Rs.699', image: c1 },
  { name: 'Pokimon', description: 'Rs.700', image: c2 },
  { name: 'Minion', description: 'Rs.599', image: c3 },
  { name: 'Tom and Jerry', description: 'Rs.999', image: c4 },
  { name: 'Spider Man', description: 'Rs.899', image: c5 },
  { name: 'Super Man', description: 'Rs.899', image: c6 },
  { name: 'Hulk', description: 'Rs.899', image: c7 },
  { name: 'Iron Man', description: 'Rs.899', image: c8 },
];

const AnimatedCharacters = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (toy) => {
    addToCart(toy);
  };

  return (
    <div className="wooden-toys-page">
      <h1 className="page-heading">Animated Characters</h1>
      <div className="card-container">
        {a.map((toy, index) => (
          <div className="card" key={index}>
            <img src={toy.image} alt={toy.name} className="card-image" />
            <h3>{toy.name}</h3>
            <p>{toy.description}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(toy)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCharacters;
