import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contact, volunteerDays } from '../data/content';

const initialForm = { nome: '', contatto: '', giorni: [] };

const Volontari = () => {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleDay = (key) => {
    setForm((f) => {
      const has = f.giorni.includes(key);
      return { ...f, giorni: has ? f.giorni.filter((g) => g !== key) : [...f.giorni, key] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS non è configurato');
      }
      const giorniLabel = volunteerDays.filter((d) => form.giorni.includes(d.key)).map((d) => d.label).join(', ') || '—';
      await emailjs.send(serviceId, templateId, {
        from_name: form.nome,
        phone: form.contatto,
        message: `Candidatura volontario. Disponibilità: ${giorniLabel}.`,
        to_email: contact.email,
      }, publicKey);
      setSent(true);
    } catch (err) {
      console.error('Errore invio candidatura:', err);
      setError(`Non siamo riusciti a inviare la candidatura. Scrivici direttamente a ${contact.email}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="volontari" className="px-[18px] py-[clamp(46px,9vw,110px)] bg-fiesta-cream border-t-2 border-fiesta-ink">
      <div className="max-w-[1180px] mx-auto grid gap-[clamp(26px,5vw,56px)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div>
          <h2 className="m-0 mb-[18px] font-black uppercase text-fiesta-ink" style={{ fontSize: 'clamp(34px,8vw,78px)', lineHeight: .92, letterSpacing: '-0.035em' }}>
            Dai una mano
          </h2>
          <p className="m-0 text-fiesta-ink" style={{ fontSize: 'clamp(16px,2.2vw,20px)', lineHeight: 1.55, maxWidth: '46ch' }}>
            Servono circa 30 persone tra cucina, bar, casse e allestimenti. Turni brevi, pasto incluso, maglietta ufficiale.
          </p>
        </div>

        <div className="bg-fiesta-ink text-fiesta-cream rounded-[24px] p-[clamp(20px,4vw,34px)]">
          {sent ? (
            <div className="flex flex-col gap-3 text-center py-4">
              <div className="text-[40px] text-fiesta-blue">✳</div>
              <h3 className="m-0 text-2xl font-black uppercase">Ci sentiamo presto</h3>
              <p className="m-0 text-base leading-[1.5] opacity-85">Ti scriviamo con i turni disponibili.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] tracking-[.16em] uppercase text-white">Nome</span>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={setField('nome')}
                  placeholder="Come ti chiami"
                  className="px-4 py-3.5 text-base border-2 border-fiesta-cream rounded-xl bg-fiesta-panel text-fiesta-cream"
                  style={{ minHeight: 48 }}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] tracking-[.16em] uppercase text-white">Telefono o email</span>
                <input
                  type="text"
                  required
                  value={form.contatto}
                  onChange={setField('contatto')}
                  placeholder="Come ti contattiamo"
                  className="px-4 py-3.5 text-base border-2 border-fiesta-cream rounded-xl bg-fiesta-panel text-fiesta-cream"
                  style={{ minHeight: 48 }}
                />
              </label>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-[.16em] uppercase text-white">Quando puoi</span>
                <div className="flex flex-wrap gap-2">
                  {volunteerDays.map((vd) => {
                    const on = form.giorni.includes(vd.key);
                    return (
                      <button
                        key={vd.key}
                        type="button"
                        onClick={() => toggleDay(vd.key)}
                        className="px-4 py-3 rounded-full border-2 border-fiesta-cream font-black text-xs tracking-[.08em] uppercase cursor-pointer"
                        style={{ background: on ? '#63ADE2' : 'transparent', color: on ? '#0E1116' : '#F2F1EC', minHeight: 44 }}
                      >
                        {vd.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              {error && <p className="m-0 text-sm text-fiesta-red">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="px-5 py-[17px] bg-fiesta-blue text-white border-none rounded-full font-black text-sm tracking-[.1em] uppercase cursor-pointer hover:bg-fiesta-cream hover:text-fiesta-ink transition-colors disabled:opacity-60"
                style={{ minHeight: 52 }}
              >
                {sending ? 'Invio in corso…' : 'Candidati come volontario'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Volontari;
