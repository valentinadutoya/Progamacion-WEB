import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import ReactDOM from 'react-dom/client';

 ReactDOM.createRoot(document.getElementById('root')).render
 (
    <div className="App">
      <Header />
      <Welcome />
      <Projects />
      <Contact />
    </div>
  );
