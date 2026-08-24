import { sponsorDeckHref } from '../data/content';
import logoWhite from '../assets/oktoberfiesta/logo-white.png';

const Sponsor = () => {
  return (
    <section id="sponsor" className="px-[18px] py-[clamp(46px,9vw,110px)] bg-fiesta-ink text-fiesta-cream">
      <div className="max-w-[1180px] mx-auto grid items-center gap-[clamp(26px,5vw,56px)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div>
          <h2 className="m-0 mb-[18px] font-black uppercase" style={{ fontSize: 'clamp(34px,8vw,78px)', lineHeight: .92, letterSpacing: '-0.035em' }}>
            Porta il tuo brand<br />in mezzo alla festa
          </h2>
          <p className="m-0 mb-[22px]" style={{ fontSize: 'clamp(16px,2.2vw,20px)', lineHeight: 1.55, maxWidth: '48ch' }}>
            Tre giorni, circa 3.000 presenze, pubblico 18–40 anni e un incasso destinato al territorio. Tutti i pacchetti, i numeri e i contatti sono nello sponsor deck.
          </p>
          <a
            href={sponsorDeckHref}
            download="EstaFiesta-OktoberFiesta-Sponsor-Deck.pdf"
            className="inline-flex items-center gap-3 px-6 py-[17px] bg-fiesta-blue text-fiesta-ink rounded-full font-black text-sm tracking-[.08em] uppercase hover:bg-fiesta-cream transition-colors"
            style={{ minHeight: 52 }}
          >
            ↓ Scarica lo sponsor deck (PDF)
          </a>
        </div>
        <div className="justify-self-center">
          <img
            src={logoWhite}
            alt="Esta Fiesta"
            className="animate-floaty bg-fiesta-cream rounded-full p-3.5"
            style={{ width: 'min(300px, 70vw)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
