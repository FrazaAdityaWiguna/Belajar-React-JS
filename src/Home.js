import React, { useState } from 'react';
import navbar from './Navbar';

const Home = () => {
  // let name = 'Fraza';
  const [name, setName] = useState('Fraza');
  const [age, setAge] = useState(19);

  const handleClick = () => {
    setName('King');
    setAge('20');
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Home;
