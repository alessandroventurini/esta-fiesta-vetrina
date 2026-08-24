import { heroImage } from '../data/content';
import logoBadge from '../assets/oktoberfiesta/logo-badge.png';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center items-center px-[18px] pt-[clamp(74px,12svh,96px)] pb-[clamp(20px,5svh,34px)] bg-fiesta-ink overflow-hidden"
    >
      <img
        src={heroImage}
        alt="OktoberFiesta"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'grayscale(1) contrast(1.08)' }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(180deg, rgba(14,17,22,.5) 0%, rgba(14,17,22,.3) 40%, rgba(14,17,22,.85) 100%)' }}
      />
      <div className="relative z-[2] flex flex-col items-center text-center gap-[clamp(14px,3svh,26px)] w-full">
        <h1 className="m-0 block w-full">
          <img
            src={logoBadge}
            alt="Esta Fiesta"
            className="block mx-auto object-contain"
            style={{ width: 'min(500px, 78vw)', maxHeight: '50svh', height: 'auto', filter: 'drop-shadow(0 8px 32px rgba(14,17,22,.55))' }}
          />
        </h1>
        <p className="m-0 font-extrabold text-fiesta-cream leading-[1.18] tracking-[-0.02em]" style={{ fontSize: 'clamp(19px, 4.6vw, 34px)', maxWidth: '24ch' }}>
          Tre eventi all'anno tra musica, food, drink e beneficenza.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <a
            href="#eventi"
            className="inline-block px-[22px] py-[15px] bg-fiesta-red text-fiesta-cream border-2 border-fiesta-cream rounded-full font-black text-[13px] tracking-[.1em] uppercase hover:bg-fiesta-cream hover:text-fiesta-red transition-colors"
          >
            I nostri eventi
          </a>
          <a
            href="#chi-siamo"
            className="inline-block px-[22px] py-[15px] bg-transparent text-fiesta-cream border-2 border-fiesta-cream rounded-full font-black text-[13px] tracking-[.1em] uppercase hover:bg-fiesta-blue hover:text-fiesta-ink hover:border-fiesta-blue transition-colors"
          >
            Chi siamo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
