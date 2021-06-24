import React from 'react';
import './App.css';

function App() {
  const title = 'Welcome to the BigDream';
  const likes = 1000;
  const link = 'https://fraza-portfolio.web.app/';

  // incorrect calling
  // const person = { name: 'fraza', age: 19 };

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>My Portfolio</a>

        {/* incorrect calling */}
        {/* <p>{person}</p> */}
      </div>
    </div>
  );
}

export default App;
