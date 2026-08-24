import { useState } from 'react';
import { photos } from '../data/content';

const Foto = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="foto" className="py-[clamp(46px,9vw,110px)] bg-fiesta-cream">
      <div className="max-w-[1180px] mx-auto px-[18px] pb-[26px]">
        <div className="font-mono text-[11px] tracking-[.22em] uppercase text-fiesta-red mb-3.5">05 — Archivio</div>
        <h2 className="m-0 mb-2.5 font-black uppercase text-fiesta-ink" style={{ fontSize: 'clamp(34px,8vw,78px)', lineHeight: .92, letterSpacing: '-0.035em' }}>
          Com'è andata<br />le altre volte
        </h2>
        <p className="m-0 text-fiesta-ink" style={{ fontSize: 'clamp(15px,2vw,18px)', lineHeight: 1.55, maxWidth: '50ch' }}>
          Foto dalle edizioni passate. Tocca per ingrandire.
        </p>
      </div>

      <div className="max-w-[1180px] mx-auto px-[18px] grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {photos.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setLightbox(src)}
            className="p-0 border-2 border-fiesta-ink rounded-2xl overflow-hidden bg-fiesta-ink cursor-zoom-in block group"
          >
            <img
              src={src}
              alt="OktoberFiesta"
              className="block w-full object-cover transition-transform group-hover:scale-[1.04]"
              style={{ aspectRatio: '1 / 1' }}
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[90] bg-fiesta-ink/[.94] flex items-center justify-center p-5 cursor-zoom-out"
        >
          <img src={lightbox} alt="OktoberFiesta" className="max-w-full rounded-xl border-2 border-fiesta-cream" style={{ maxHeight: '90svh' }} />
        </div>
      )}
    </section>
  );
};

export default Foto;
