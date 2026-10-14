import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChiSiamo from './components/ChiSiamo';
import Foto from './components/Foto';
import Sponsor from './components/Sponsor';
import Dove from './components/Dove';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-fiesta-ink bg-fiesta-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Foto />
        <ChiSiamo />
        <Sponsor />
        <Dove />
      </main>
      <Footer />
    </div>
  );
}

export default App;
