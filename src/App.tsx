import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './features/Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This Project is for Learning React with Redux App
        </p>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
