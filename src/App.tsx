import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>News feed</a>
      <a>Messenger</a>
    </div>
  )
}

const Technologies = () => {
  return (
    <div>
    Second divka
    Hello, samurai! Let's go!
    <ul>
      <li>css</li>
      <li>html</li>
      <li>js</li>
      <li>react</li>
    </ul>
  </div>
  )
}

export default App;
