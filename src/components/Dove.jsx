import { contact } from '../data/content';

const Dove = () => {
  return (
    <section id="dove" className="px-[18px] py-[clamp(46px,9vw,110px)] bg-fiesta-cream">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="m-0 mb-[30px] font-black uppercase text-fiesta-ink" style={{ fontSize: 'clamp(34px,8vw,78px)', lineHeight: .92, letterSpacing: '-0.035em' }}>
          dove siamo
        </h2>
        <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="border-2 border-fiesta-ink rounded-[22px] overflow-hidden bg-[#DCE7EF]" style={{ minHeight: 300 }}>
            <iframe
              title="Mappa"
              src={contact.osmEmbedSrc}
              className="w-full h-full block border-0"
              style={{ minHeight: 300 }}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="p-[22px] bg-fiesta-ink text-fiesta-cream rounded-[22px]">
              <div className="font-mono text-[10px] tracking-[.16em] uppercase text-fiesta-blue mb-2">Indirizzo</div>
              <div className="font-black uppercase leading-[1.1]" style={{ fontSize: 'clamp(20px,3vw,26px)' }}>
                Via Marconi 25<br />25030 Castel Mella (BS)
              </div>
              <a
                href={contact.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3.5 px-[18px] py-3 bg-fiesta-red text-fiesta-cream rounded-full font-black text-xs tracking-[.1em] uppercase hover:bg-fiesta-blue hover:text-fiesta-ink transition-colors"
              >
                Apri in Maps
              </a>
            </div>
            <div className="p-[22px] border-2 border-fiesta-ink rounded-[22px] flex flex-col gap-2.5 text-fiesta-ink">
              <div className="font-mono text-[10px] tracking-[.16em] uppercase text-fiesta-red">Come arrivare</div>
              <div className="text-[15px] leading-[1.5]"><strong>In auto</strong> — 10 minuti dal centro di Brescia, uscita tangenziale ovest. Parcheggio nelle vie adiacenti.</div>
              <div className="text-[15px] leading-[1.5]"><strong>In bus</strong> — linee suburbane per Castel Mella, fermata a pochi minuti a piedi dall'oratorio.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dove;
