import './App.css';
import React, { Component } from 'react';
import { Timer } from './Timer.js';
import { Header } from './Header.js';

  function App() {
      return (
      <div className="container-fluid">
          <Header />
          <Timer />
      </div>
  );
}

export default App;
