import { formats, eventCountdownTarget } from '../data/content';
import { useCountdown } from '../hooks/useCountdown';
import logoOktoberfiesta from '../assets/oktoberfiesta/logo_oktoberfiesta.png';

const Eventi = () => {
  const cd = useCountdown(eventCountdownTarget);
  const showCountdown = !cd.isOver;

  return (
    <section id="eventi" className="px-[18px] py-[clamp(46px,9vw,110px)] bg-fiesta-cream border-t-2 border-fiesta-ink">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="m-0 mb-2.5 font-black uppercase text-fiesta-ink" style={{ fontSize: 'clamp(34px,8vw,78px)', lineHeight: .92, letterSpacing: '-0.035em' }}>
          Tre appuntamenti<br />all'anno
        </h2>
        <p className="m-0 mb-[30px] text-fiesta-ink" style={{ fontSize: 'clamp(15px,2vw,18px)', lineHeight: 1.55, maxWidth: '52ch' }}>
          Ogni stagione ha il suo format. Cambiano musica, cucina e allestimento, resta lo stesso obiettivo: raccogliere fondi per il territorio bresciano.
        </p>

        <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {formats.map((ev) => (
            <article
              key={ev.name}
              className="flex flex-col gap-3 px-[22px] pt-6 pb-[26px] border-2 border-fiesta-ink rounded-[22px] transition-transform hover:-translate-y-1"
              style={{ background: ev.bg, color: ev.fg, minHeight: 260 }}
            >
              <div className="flex items-center justify-between gap-2.5">
                <span className="font-mono text-[10px] tracking-[.16em] uppercase">{ev.season}</span>
                <span className="font-mono text-[10px] tracking-[.12em] uppercase px-2.5 py-[5px] border border-current rounded-full">{ev.status}</span>
              </div>
              {ev.name === 'OktoberFiesta' ? (
                <img src={logoOktoberfiesta} alt={ev.name} className="block" style={{ width: 'min(220px, 80%)' }} />
              ) : (
                <h3 className="m-0 font-black uppercase" style={{ fontSize: 'clamp(26px,5vw,40px)', lineHeight: .95, letterSpacing: '-0.03em' }}>
                  {ev.name}
                </h3>
              )}
              <div className="text-[17px] font-extrabold">{ev.when}</div>
              <p className="m-0 text-[15px] leading-[1.5] opacity-90">{ev.what}</p>
              <div className="mt-auto font-mono text-[11px] tracking-[.1em] uppercase">{ev.place}</div>
            </article>
          ))}
        </div>

        <div className="mt-[26px] p-[clamp(22px,4vw,34px)] bg-fiesta-ink text-fiesta-cream rounded-[24px] grid gap-6 items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <div className="flex flex-col gap-2.5">
            <img src={logoOktoberfiesta} alt="OktoberFiesta" className="block" style={{ width: 'min(260px, 70%)' }} />
            <div className="font-black uppercase" style={{ fontSize: 'clamp(24px,5vw,38px)', lineHeight: .95, letterSpacing: '-0.03em' }}>
              02 · 03 · 04 Ottobre
            </div>
            <div className="font-mono text-[11px] tracking-[.12em] uppercase opacity-75">VIA LUIGI MARCONI 25, CASTEL MELLA</div>
            <div className="flex flex-wrap gap-2.5 mt-1.5">
              <a href="#programma" className="px-[18px] py-[13px] bg-fiesta-red text-fiesta-cream rounded-full font-black text-xs tracking-[.1em] uppercase hover:bg-fiesta-blue hover:text-fiesta-ink transition-colors">
                Programma completo
              </a>
              <a href="#prenota" className="px-[18px] py-[13px] border-2 border-fiesta-cream text-fiesta-cream rounded-full font-black text-xs tracking-[.1em] uppercase hover:bg-fiesta-cream hover:text-fiesta-ink transition-colors">
                Prenota il pranzo
              </a>
            </div>
          </div>

          {showCountdown && (
            <div className="grid grid-cols-4 gap-2">
              {[
                { v: cd.days, l: 'Giorni' },
                { v: cd.hours, l: 'Ore' },
                { v: cd.minutes, l: 'Minuti' },
              ].map((c) => (
                <div key={c.l} className="p-3 px-1.5 bg-white/[.08] border border-white/30 rounded-xl text-center">
                  <div className="font-black leading-none" style={{ fontSize: 'clamp(24px,6vw,40px)' }}>{c.v}</div>
                  <div className="font-mono text-[9px] tracking-[.16em] uppercase text-fiesta-blue mt-1">{c.l}</div>
                </div>
              ))}
              <div className="p-3 px-1.5 bg-white/[.08] border border-white/30 rounded-xl text-center">
                <div className="font-black leading-none text-fiesta-red animate-blink" style={{ fontSize: 'clamp(24px,6vw,40px)' }}>{cd.seconds}</div>
                <div className="font-mono text-[9px] tracking-[.16em] uppercase text-fiesta-blue mt-1">Secondi</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Eventi;
