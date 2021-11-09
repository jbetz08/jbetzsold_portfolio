import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Summary />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
