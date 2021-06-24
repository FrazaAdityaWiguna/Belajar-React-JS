import React from 'react';
import navbar from './Navbar';

const handleClick = (e) => {
  console.log('Hello, Everyone!', e);
};

const handleClickAgain = (name, e) => {
  console.log(`Hello, ${name}!`, e.target);
};

const Home = () => (
  <div className="home">
    <h2>Homepage</h2>
    <button type="button" onClick={handleClick}>
      Click me
    </button>
    <button type="button" onClick={(e) => handleClickAgain('Fraza', e)}>
      Click me again!
    </button>
  </div>
);

export default Home;
