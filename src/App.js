import React from 'react';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Photography from './components/Photography';
import Design from './components/Design';

function App() {
  return (
    <div className="App">
      <h1> NavBar </h1>
      <Intro/>
      <About/>
      <Photography/>
      <Design/>
    </div>
  );
}

export default App;
