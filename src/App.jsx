import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutCreative from './components/AboutCreative';
import NextEvent from './components/NextEvent';
import GalleryPro from './components/GalleryPro';
import BeneficenzaSimple from './components/BeneficenzaSimple';
import CollaboraPro from './components/CollaboraPro';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="App font-inter text-gray-100 bg-[#0a0a0a] overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <AboutCreative />
        <NextEvent />
        <GalleryPro />
        <BeneficenzaSimple />
        <CollaboraPro />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
