// src/Components/BoardGames.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Asserts/boardgames.css';

import bg1 from './Asserts/bg1.avif';
import bg2 from './Asserts/bg2.jpg';
import bg3 from './Asserts/bg3.jpg';
import bg4 from './Asserts/bg4.jpg';
import bg5 from './Asserts/bg1a.jpg';
import bg6 from './Asserts/bg2a.jpg';
import bg7 from './Asserts/bg3a.jpg';
import bg8 from './Asserts/bg4a.jpg';

const boardGames = [
  { name: 'Monopoly', description: 'Rs.1999', image: bg1 },
  { name: 'Chess', description: 'Rs.2599', image: bg2 },
  { name: 'Snake and Ladders', description: 'Rs.1099', image: bg3 },
  { name: 'Alphabet board', description: 'Rs.899', image: bg4 },
  { name: 'Scrabble', description: 'Rs.1599', image: bg5 },
  { name: 'Know Your Shapes', description: 'Rs.899', image: bg6 },
  { name: 'Fruits Board', description: 'Rs.999', image: bg7 },
  { name: 'Ludo', description: 'Rs.1099', image: bg8 },
];

const BoardGames = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="board-games-page">
      <h1 className="page-heading">Board Games</h1>
      <div className="card-container">
        {boardGames.map((game, index) => (
          <div className="card" key={index}>
            <img src={game.image} alt={game.name} className="card-image" />
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(game)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardGames;
