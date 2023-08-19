import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AboutMe from './Aboutme/Aboutme';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <AboutMe />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
