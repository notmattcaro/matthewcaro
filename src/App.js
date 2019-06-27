import React from 'react';
import './App.css';
import Nav from './components/Nav';
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
    <Nav/>
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
