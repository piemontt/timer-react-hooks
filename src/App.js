import React from 'react';
import './App.css';
import { Header } from './Header.js';
import { Timer } from './Timer.js';


  function App() {
      return (
      <div className="container-fluid">
          <Header />
              <Timer />
              
      </div>
  );
}

export default App;
