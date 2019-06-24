import React from 'react';
import './App.css';
import SlantLeft from './components/SubComponents/SlantLeft';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <h1> NavBar </h1>
      <Intro></Intro>
      <SlantLeft></SlantLeft>
    </div>
  );
}

export default App;
