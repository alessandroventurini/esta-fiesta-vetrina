import { days } from '../data/content';

const Programma = () => {
  return (
    <section id="programma" className="px-[18px] py-[clamp(46px,9vw,110px)] bg-fiesta-ink text-fiesta-cream">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="m-0 mb-2.5 font-black uppercase" style={{ fontSize: 'clamp(34px,8vw,78px)', lineHeight: .92, letterSpacing: '-0.035em' }}>
          Tre giorni,<br />tre serate diverse
        </h2>
        <p className="m-0 mb-[34px] opacity-80" style={{ fontSize: 'clamp(15px,2vw,18px)', lineHeight: 1.55, maxWidth: '52ch' }}>
          Ogni serata ha un partner e un'identità musicale propria. Musica anni 90, commerciale e house / tech house.
        </p>

        <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {days.map((day) => (
            <article
              key={day.date}
              className="flex flex-col bg-fiesta-panel border border-white/[.16] rounded-[22px] overflow-hidden transition-transform hover:-translate-y-1 hover:border-fiesta-red"
            >
              <img
                src={day.poster}
                alt={day.title}
                className="w-full block border-b border-white/[.16] object-cover"
                style={{ aspectRatio: '4 / 5', objectPosition: 'top' }}
              />
              <div className="px-[18px] pt-5 pb-[22px] flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between gap-2.5">
                  <span className="font-mono text-[11px] tracking-[.16em] uppercase text-fiesta-blue">{day.weekday}</span>
                  <span className="font-mono text-[10px] tracking-[.12em] uppercase px-2.5 py-[5px] border border-white/[.35] rounded-full">{day.hours}</span>
                </div>
                <div className="font-black uppercase" style={{ fontSize: 'clamp(28px,5vw,40px)', lineHeight: .95, letterSpacing: '-0.03em' }}>{day.date}</div>
                <div className="font-black uppercase text-fiesta-red" style={{ fontSize: 'clamp(18px,2.6vw,24px)', letterSpacing: '-0.01em' }}>{day.partner}</div>
                <div className="font-mono text-[11px] tracking-[.1em] uppercase text-fiesta-blue">{day.music}</div>
                <p className="m-0 text-[15px] leading-[1.5] opacity-85">{day.note}</p>
                <div className="mt-auto pt-3.5 flex flex-col gap-1.5 border-t border-white/[.16]">
                  {day.slots.map((slot) => (
                    <div key={slot.time} className="flex gap-3 text-sm">
                      <span className="font-mono font-bold text-fiesta-blue" style={{ minWidth: 62 }}>{slot.time}</span>
                      <span className="opacity-90">{slot.what}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[18px] flex flex-wrap items-center gap-3.5 p-[18px] bg-fiesta-panel border border-dashed border-white/30 rounded-[18px]">
          <span className="opacity-50">·</span>
          <span className="text-[15px]">Il pranzo di domenica è su prenotazione</span>
          <a
            href="#prenota"
            className="ml-auto px-[18px] py-3 bg-fiesta-red text-fiesta-cream rounded-full font-black text-xs tracking-[.1em] uppercase hover:bg-fiesta-cream hover:text-fiesta-red transition-colors"
          >
            Prenota ora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programma;
