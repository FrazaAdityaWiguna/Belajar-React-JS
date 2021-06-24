import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the BigDream';
  const likes = 1000;
  const link = 'https://fraza-portfolio.web.app/';

  // incorrect calling
  // const person = { name: 'fraza', age: 19 };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
