import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetQuotes from './components/Quotes/GetQuotes';

function App() {
  return (
    <div className="App">
      <h1 className = "header">Random Quote Generator</h1>
      <GetQuotes/>
    
    </div>
  );
}

export default App;
