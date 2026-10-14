import { useState } from 'react';
import { navLinks, contact } from '../data/content';
import useDialog from '../hooks/useDialog';
import logoWhite from '../assets/oktoberfiesta/logo-white.png';

const MobileMenu = ({ onClose }) => {
  const dialogRef = useDialog();
  return (
    <dialog ref={dialogRef} aria-label="Navigazione" className="photo-dialog menu-dialog" onCancel={(event) => { event.preventDefault(); onClose(); }}>
      <div className="flex justify-end">
        <button type="button" onClick={onClose} aria-label="Chiudi menu" className="viewer-control">×</button>
      </div>
      <nav id="menu-principale" aria-label="Menu principale" className="flex flex-col gap-2 my-auto">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={onClose} className="text-[clamp(30px,8vw,64px)] font-black leading-[1.05] tracking-[-.03em] uppercase text-fiesta-cream hover:text-fiesta-blue">{link.label}</a>
        ))}
      </nav>
      <div className="flex flex-wrap gap-4 font-mono text-xs tracking-[.08em] uppercase">
        <a href={contact.instagramHref} target="_blank" rel="noreferrer" className="border-b border-fiesta-cream/50">{contact.instagram}</a>
        <a href={`mailto:${contact.email}`} className="border-b border-fiesta-cream/50">Email</a>
        <a href={contact.phoneHref} className="border-b border-fiesta-cream/50">{contact.phone}</a>
      </div>
    </dialog>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between gap-3 px-3.5 py-3 bg-fiesta-ink">
        <a href="#top" aria-label="Esta Fiesta — inizio pagina" className="flex items-center min-w-0">
          <img src={logoWhite} alt="" className="block w-[52px] h-[52px] object-contain" />
        </a>
        <div className="flex items-center gap-2">
          <a href="#foto" className="fiesta-button bg-fiesta-red text-fiesta-cream">Foto ↗</a>
          <button type="button" onClick={(event) => { event.currentTarget.focus({ preventScroll: true }); setMenuOpen(true); }} aria-label="Menu" aria-expanded={menuOpen} className="flex flex-col justify-center gap-[5px] w-[46px] h-11 px-[11px] bg-fiesta-ink border-2 border-fiesta-cream/30 rounded-full">
            <span className="block h-0.5 bg-fiesta-cream" />
            <span className="block h-0.5 bg-fiesta-cream" />
            <span className="block h-0.5 bg-fiesta-cream" />
          </button>
        </div>
      </header>
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
