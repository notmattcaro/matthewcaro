import React from 'react';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <h1> NavBar </h1>
      <Intro></Intro>
      <About></About>
    </div>
  );
}

export default App;
