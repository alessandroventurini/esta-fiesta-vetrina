import { useEffect, useState } from 'react';
import { navLinks, contact } from '../data/content';
import logoWhite from '../assets/oktoberfiesta/logo-white.png';

const Navbar = () => {
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('top');
      const limit = hero ? hero.offsetHeight - 70 : 400;
      setPastHero(window.scrollY > limit);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between gap-3 px-3.5 py-3 transition-colors duration-300"
        style={{ background: pastHero ? '#0E1116' : 'transparent' }}
      >
        <a href="#top" className="flex items-center min-w-0">
          <img src={logoWhite} alt="Esta Fiesta" className="block w-[52px] h-[52px] object-contain" />
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#prenota"
            className="inline-block px-3.5 py-2.5 bg-fiesta-red text-fiesta-cream border-2 border-fiesta-ink rounded-full font-black text-xs tracking-[.08em] uppercase hover:bg-fiesta-ink transition-colors"
          >
            Prenota
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className="flex flex-col justify-center gap-[5px] w-[46px] h-11 px-[11px] bg-fiesta-ink border-2 border-fiesta-ink rounded-full cursor-pointer"
          >
            <span className="block h-0.5 bg-fiesta-cream" />
            <span className="block h-0.5 bg-fiesta-cream" />
            <span className="block h-0.5 bg-fiesta-cream" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] bg-fiesta-red flex flex-col p-[18px] pb-8">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-[46px] h-[46px] rounded-full bg-transparent border-2 border-fiesta-cream text-fiesta-cream text-xl font-black cursor-pointer"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-col gap-0.5 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[clamp(30px,9vw,64px)] font-black leading-[1.02] tracking-[-0.03em] uppercase text-fiesta-cream hover:text-fiesta-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-4 font-mono text-xs tracking-[.08em] uppercase">
            <a href={contact.instagramHref} target="_blank" rel="noreferrer" className="text-fiesta-cream border-b border-fiesta-cream/50">
              {contact.instagram}
            </a>
            <a href={`mailto:${contact.email}`} className="text-fiesta-cream border-b border-fiesta-cream/50">
              Email
            </a>
            <a href={contact.phoneHref} className="text-fiesta-cream border-b border-fiesta-cream/50">
              {contact.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
