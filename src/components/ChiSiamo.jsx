const ChiSiamo = () => {
  return (
    <section id="chi-siamo" className="px-[18px] py-[clamp(46px,9vw,110px)] bg-fiesta-cream">
      <div className="max-w-[1180px] mx-auto grid gap-[clamp(26px,5vw,64px)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div>
          <h2 className="m-0 mb-5 font-black uppercase text-fiesta-ink" style={{ fontSize: 'clamp(34px,8vw,78px)', lineHeight: .92, letterSpacing: '-0.035em', textWrap: 'balance' }}>
            Facciamo festa<br />per una buona causa
          </h2>
          <p className="m-0 mb-3.5 text-fiesta-ink" style={{ fontSize: 'clamp(16px,2.2vw,20px)', lineHeight: 1.55, maxWidth: '54ch' }}>
            Esta Fiesta ODV è un'associazione di promozione sociale di Brescia, nata nel 2023. Organizziamo eventi musicali che uniscono musica, food, drink e beneficenza.
          </p>
          <p className="m-0 text-fiesta-ink" style={{ fontSize: 'clamp(16px,2.2vw,20px)', lineHeight: 1.55, maxWidth: '54ch' }}>
            L'intero incasso di OktoberFiesta è destinato ad associazioni ed enti no-profit del territorio bresciano. Viene trattenuta solo una piccola percentuale, reinvestita negli eventi successivi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamo;
