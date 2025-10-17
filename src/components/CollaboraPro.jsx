import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Mail, User, MapPin, MessageSquare, Phone, Sparkles, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from './ui/Button';

const CollaboraPro = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Configurazione EmailJS - le chiavi vanno in .env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Verifica che le chiavi siano configurate
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS non è configurato. Controlla il file .env');
      }

      // Template parameters che EmailJS invierà
      const templateParams = {
        from_name: data.nome,
        from_email: data.email,
        phone: data.telefono || 'Non fornito',
        comune: data.comune,
        message: data.messaggio,
        to_email: 'estafiestacastelmella@gmail.com',
      };

      // Invia email tramite EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      // Successo!
      setIsSubmitted(true);
      reset();
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);

    } catch (error) {
      console.error('Errore invio email:', error);
      setSubmitError('Si è verificato un errore. Riprova o scrivici direttamente a estafiestacastelmella@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: '🎪',
      title: 'Esperienza Completa',
      desc: 'Format consolidato e collaudato sul campo'
    },
    {
      icon: '🎯',
      title: 'Chiavi in Mano',
      desc: 'Ci occupiamo di tutta l\'organizzazione'
    },
    {
      icon: '👥',
      title: 'Aggregazione Giovanile',
      desc: 'Portiamo energia e vitalità nelle piazze'
    },
    {
      icon: '❤️',
      title: 'Solidarietà Inclusa',
      desc: 'Ogni evento sostiene un ente benefico'
    }
  ];

  return (
    <section id="collabora" className="relative py-20 md:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-20 w-96 h-96 bg-fiesta-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-20 w-96 h-96 bg-fiesta-red/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-fiesta-blue/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-fiesta-blue" />
            <span className="text-white font-semibold">Organizziamo Insieme</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat text-white mb-6">
            Organizza
            <br />
            <span className="bg-gradient-to-r from-fiesta-blue to-fiesta-red bg-clip-text text-transparent">
              Con Noi
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Comuni, Pro-Loco, Associazioni: portiamo energia nella tua piazza
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-fiesta-blue transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Scrivici
              </h3>
              <p className="text-gray-400">
                Ti rispondiamo in 48h. Promesso.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nome e Email in riga su desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-fiesta-blue" />
                    Nome e Cognome *
                  </label>
                  <input
                    {...register('nome', { required: 'Campo obbligatorio' })}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-fiesta-blue focus:outline-none transition-colors"
                    placeholder="Mario Rossi"
                  />
                  {errors.nome && (
                    <p className="text-fiesta-red text-sm mt-1">{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-fiesta-blue" />
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Campo obbligatorio',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email non valida'
                      }
                    })}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-fiesta-blue focus:outline-none transition-colors"
                    placeholder="mario.rossi@email.com"
                  />
                  {errors.email && (
                    <p className="text-fiesta-red text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Telefono e Comune in riga */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-fiesta-blue" />
                    Telefono
                  </label>
                  <input
                    {...register('telefono')}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-fiesta-blue focus:outline-none transition-colors"
                    placeholder="+39 333 1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-fiesta-blue" />
                    Comune/Località *
                  </label>
                  <input
                    {...register('comune', { required: 'Campo obbligatorio' })}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-fiesta-blue focus:outline-none transition-colors"
                    placeholder="Es. Roccaforte"
                  />
                  {errors.comune && (
                    <p className="text-fiesta-red text-sm mt-1">{errors.comune.message}</p>
                  )}
                </div>
              </div>

              {/* Messaggio */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-fiesta-blue" />
                  Messaggio *
                </label>
                <textarea
                  {...register('messaggio', { 
                    required: 'Campo obbligatorio',
                    minLength: { value: 20, message: 'Minimo 20 caratteri' }
                  })}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-fiesta-blue focus:outline-none transition-colors resize-none"
                  placeholder="Raccontaci il tuo progetto..."
                />
                {errors.messaggio && (
                  <p className="text-fiesta-red text-sm mt-1">{errors.messaggio.message}</p>
                )}
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  {...register('privacy', { required: true })}
                  className="mt-1 w-5 h-5 accent-fiesta-blue rounded"
                />
                <label className="text-sm text-gray-300">
                  Accetto la Privacy Policy e autorizzo il trattamento dei miei dati *
                </label>
              </div>
              {errors.privacy && (
                <p className="text-fiesta-red text-sm">Devi accettare la privacy policy</p>
              )}

              {/* Error Message */}
              {submitError && (
                <motion.div
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{submitError}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Invio in corso...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Invia Richiesta
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-6">
            <p className="text-4xl font-bold text-fiesta-blue mb-2">48h</p>
            <p className="text-gray-400">Risposta garantita</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-fiesta-red mb-2">4</p>
            <p className="text-gray-400">Eventi/Anno</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-fiesta-teal mb-2">10+</p>
            <p className="text-gray-400">Format Coinvolti</p>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 max-w-md w-full text-center"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Richiesta Ricevuta!
              </h3>
              <p className="text-gray-400">
                Ti contatteremo entro 48h per discutere il progetto 🎉
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollaboraPro;
