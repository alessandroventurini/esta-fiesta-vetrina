import { beerCards } from '../data/content';

const Birre = () => {
  return (
    <section id="birre" className="px-[18px] py-[clamp(46px,9vw,110px)] bg-fiesta-blue text-fiesta-ink">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="m-0 mb-[34px] font-black uppercase text-white" style={{ fontSize: 'clamp(34px,8vw,78px)', lineHeight: .92, letterSpacing: '-0.035em' }}>
          Si mangia, si beve,<br />si balla
        </h2>
        <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {beerCards.map((card) => (
            <div key={card.title} className="px-[22px] py-[26px] bg-fiesta-cream border-2 border-fiesta-ink rounded-[22px]">
              <div className="font-black leading-none text-fiesta-red" style={{ fontSize: 'clamp(44px,8vw,68px)' }}>{card.number}</div>
              <h3 className="mt-2.5 mb-2 font-black uppercase text-xl" style={{ letterSpacing: '-0.01em' }}>{card.title}</h3>
              <p className="m-0 text-[15px] leading-[1.5]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Birre;
