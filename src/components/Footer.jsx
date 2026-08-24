import { contact } from '../data/content';
import logoWhite from '../assets/oktoberfiesta/logo-white.png';

const Footer = () => {
  return (
    <footer className="px-[18px] pt-[clamp(40px,7vw,80px)] pb-[30px] bg-fiesta-red text-fiesta-cream border-t-2 border-fiesta-ink">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-[30px]">
        <img src={logoWhite} alt="Esta Fiesta" style={{ width: 'min(260px, 60vw)' }} />
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] tracking-[.16em] uppercase text-fiesta-blue">Contatti</div>
            <a href={contact.phoneHref} className="text-fiesta-cream text-[17px] font-extrabold">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="text-fiesta-cream text-[15px] font-extrabold break-all">{contact.email}</a>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] tracking-[.16em] uppercase text-fiesta-blue">Social</div>
            <a href={contact.instagramHref} target="_blank" rel="noreferrer" className="text-fiesta-cream text-[17px] font-extrabold">{contact.instagram}</a>
            <a href={contact.websiteHref} target="_blank" rel="noreferrer" className="text-fiesta-cream text-[17px] font-extrabold">{contact.website}</a>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] tracking-[.16em] uppercase text-fiesta-blue">Dove</div>
            <div className="text-[15px] leading-[1.5]">Via Marconi 25 — Brescia</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
