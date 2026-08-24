import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChiSiamo from './components/ChiSiamo';
import Eventi from './components/Eventi';
import Programma from './components/Programma';
import Birre from './components/Birre';
import Foto from './components/Foto';
import Prenota from './components/Prenota';
import Sponsor from './components/Sponsor';
import Dove from './components/Dove';
import Volontari from './components/Volontari';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-fiesta-ink bg-fiesta-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ChiSiamo />
        <Eventi />
        <Programma />
        <Birre />
        <Foto />
        <Prenota />
        <Sponsor />
        <Dove />
      </main>
      <Footer />
    </div>
  );
}

export default App;
