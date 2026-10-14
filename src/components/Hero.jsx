import { contact } from '../data/content';

const Hero = () => (
  <section id="top" className="bg-fiesta-ink text-fiesta-cream px-[18px] pt-[108px] pb-10 md:pb-14">
    <div className="max-w-[1180px] mx-auto">
      <p className="font-mono text-[11px] tracking-[.15em] uppercase text-fiesta-blue mb-3">Ci rivediamo presto</p>
      <h1 className="font-black uppercase tracking-[-.04em] leading-[.95] max-w-[19ch] m-0" style={{ fontSize: 'clamp(34px, 5vw, 64px)' }}>Next event is coming soon</h1>
      <p className="text-[15px] md:text-lg leading-relaxed mt-5 mb-6">Nel frattempo, riviviamo OktoberFiesta 2026.</p>
      <div className="flex flex-wrap gap-3">
        <a href="#foto" className="fiesta-button bg-fiesta-red text-fiesta-cream">Guarda le foto ↗</a>
        <a href={contact.instagramHref} target="_blank" rel="noreferrer" className="fiesta-button border border-fiesta-cream/40 text-fiesta-cream">Seguici su Instagram</a>
      </div>
    </div>
  </section>
);

export default Hero;
