import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contact, reservationDates } from '../data/content';

const initialForm = { nome: '', tel: '', persone: 4, data: 'dom-04', note: '' };

const Prenota = () => {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

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
      await emailjs.send(serviceId, templateId, {
        from_name: form.nome,
        phone: form.tel,
        message: `Prenotazione lunch party — ${reservationDates.find((d) => d.value === form.data)?.label ?? form.data}. Persone: ${form.persone}. Note: ${form.note || '—'}`,
        to_email: contact.email,
      }, publicKey);
      setSent(true);
    } catch (err) {
      console.error('Errore invio prenotazione:', err);
      setError(`Non siamo riusciti a inviare la richiesta. Scrivici direttamente a ${contact.email}.`);
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setSent(false);
    setForm(initialForm);
  };

  return (
    <section id="prenota" className="px-[18px] py-[clamp(46px,9vw,110px)] bg-fiesta-red text-fiesta-cream">
      <div className="max-w-[1180px] mx-auto grid gap-[clamp(26px,5vw,56px)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div>
          <h2 className="m-0 mb-[18px] font-black uppercase" style={{ fontSize: 'clamp(34px,8vw,78px)', lineHeight: .92, letterSpacing: '-0.035em' }}>
            Lo Spiedone<br />lunch party
          </h2>
          <p className="m-0 mb-[18px]" style={{ fontSize: 'clamp(16px,2.2vw,20px)', lineHeight: 1.55, maxWidth: '46ch' }}>
            Domenica 04 ottobre, pranzo con Splendido Splendente. I posti sono limitati e si prenotano in anticipo.
          </p>
          <div className="flex flex-wrap gap-2.5 font-mono text-xs tracking-[.1em] uppercase">
            <a href={contact.phoneHref} className="px-4 py-3 border-2 border-fiesta-cream rounded-full text-fiesta-cream hover:bg-fiesta-cream hover:text-fiesta-red transition-colors">
              Chiama {contact.phone}
            </a>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="px-4 py-3 border-2 border-fiesta-cream rounded-full text-fiesta-cream hover:bg-fiesta-cream hover:text-fiesta-red transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-fiesta-cream text-fiesta-ink border-2 border-fiesta-ink rounded-[24px] p-[clamp(20px,4vw,34px)]">
          {sent ? (
            <div className="flex flex-col gap-3 text-center py-5">
              <div className="text-[44px]">✳</div>
              <h3 className="m-0 text-2xl font-black uppercase">Richiesta inviata</h3>
              <p className="m-0 text-base leading-[1.5]">Ti confermiamo il tavolo via WhatsApp entro 48 ore. Grazie!</p>
              <button
                type="button"
                onClick={resetForm}
                className="mt-1.5 mx-auto px-[18px] py-3 bg-fiesta-ink text-fiesta-cream border-none rounded-full font-black text-xs tracking-[.1em] uppercase cursor-pointer"
              >
                Nuova prenotazione
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <h3 className="m-0 font-black uppercase" style={{ fontSize: 'clamp(20px,3vw,26px)', letterSpacing: '-0.01em' }}>
                Prenota il tuo posto
              </h3>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] tracking-[.16em] uppercase">Nome e cognome</span>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={setField('nome')}
                  placeholder="Mario Rossi"
                  className="px-4 py-3.5 text-base border-2 border-fiesta-ink rounded-xl bg-white"
                  style={{ minHeight: 48 }}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] tracking-[.16em] uppercase">Telefono</span>
                <input
                  type="tel"
                  required
                  value={form.tel}
                  onChange={setField('tel')}
                  placeholder="329 000 0000"
                  className="px-4 py-3.5 text-base border-2 border-fiesta-ink rounded-xl bg-white"
                  style={{ minHeight: 48 }}
                />
              </label>
              <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] tracking-[.16em] uppercase">Persone</span>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={form.persone}
                    onChange={setField('persone')}
                    className="px-4 py-3.5 text-base border-2 border-fiesta-ink rounded-xl bg-white"
                    style={{ minHeight: 48 }}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] tracking-[.16em] uppercase">Data</span>
                  <select
                    value={form.data}
                    onChange={setField('data')}
                    className="px-4 py-3.5 text-base border-2 border-fiesta-ink rounded-xl bg-white"
                    style={{ minHeight: 48 }}
                  >
                    {reservationDates.map((d) => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] tracking-[.16em] uppercase">Note (allergie, bambini, seggioloni)</span>
                <textarea
                  rows={2}
                  value={form.note}
                  onChange={setField('note')}
                  placeholder="Facoltativo"
                  className="px-4 py-3.5 text-base border-2 border-fiesta-ink rounded-xl bg-white resize-y"
                />
              </label>
              {error && <p className="m-0 text-sm text-fiesta-red">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="px-5 py-[17px] bg-fiesta-red text-fiesta-cream border-2 border-fiesta-ink rounded-full font-black text-sm tracking-[.1em] uppercase cursor-pointer hover:bg-fiesta-ink transition-colors disabled:opacity-60"
                style={{ minHeight: 52 }}
              >
                {sending ? 'Invio in corso…' : 'Invia richiesta'}
              </button>
              <p className="m-0 font-mono text-[10px] tracking-[.08em] leading-[1.5] opacity-70">
                La prenotazione è confermata solo dopo la nostra risposta.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Prenota;
