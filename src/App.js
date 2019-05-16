import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './searchBar';
import Heading from './Heading';

function App() {
  return (
    <div className="App">
    <Heading />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="spinning pokéball" />
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
