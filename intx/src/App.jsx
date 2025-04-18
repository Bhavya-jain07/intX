import React from 'react';
import './App.css';
import Hero from './components/Hero';
import TechnicalSessions from './components/Event';
import Statistics from './components/Statistics';
import Impact from './components/Impact';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="app">
      <div className="cyber-grid"></div>
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      <Hero />
      <div className="section-divider"></div>
      <TechnicalSessions />
      <div className="section-divider"></div>
      <Statistics />
      <div className="section-divider"></div>
      <ImageGallery />
      <div className="section-divider"></div>
      <Impact />
    </div>
  );
}

export default App;




