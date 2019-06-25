import React from 'react';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Photography from './components/Photography';
import Design from './components/Design';
import Web from './components/Web';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1> NavBar </h1>
      <Intro/>
      <About/>
      <Photography/>
      <Design/>
      <Web/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
