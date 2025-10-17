import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, UtensilsCrossed, Music, PartyPopper } from 'lucide-react';
import Button from './ui/Button';
import eventImage from '../assets/IMG_1923.JPG';
import logoAF from '../assets/log_af.svg';

const NextEvent = () => {
  // Mock data - in produzione verrebbe da API/CMS
  const nextEvent = {
    title: 'APERIFIESTA Halloween Edition',
    location: 'Roncadelle (BS) - Palazzetto dello sport',
    date: 'Venerdì 31 Ottobre',
    time: '19:30 - Late',
    image: eventImage,
    formats: ['Stand Gastronomici', 'Cocktail Bar', 'DJ Set', 'Cena su Prenotazione'],
  };

  return (
    <section id="next-event" className="relative py-20 md:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-fiesta-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-fiesta-red/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Badge + Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-fiesta-red/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PartyPopper className="w-5 h-5 text-fiesta-red" />
            <span className="text-white font-semibold">Prossimo Evento</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat text-white mb-4 flex items-center justify-center gap-3 flex-wrap">
            <img src={logoAF} alt="APERIFIESTA" className="inline h-32 md:h-40 lg:h-56 align-middle" />
            <span className="text-orange-600 flex items-center gap-2" style={{ fontFamily: 'Creepster, cursive' }}>
              🎃 Halloween Edition 🎃
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400">
            {nextEvent.date} • {nextEvent.time}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative mb-16 rounded-3xl overflow-hidden h-[400px] md:h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={nextEvent.image}
            alt={nextEvent.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Floating badges sui format */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
            {nextEvent.formats.map((format, idx) => (
              <motion.span
                key={idx}
                className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {format}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card Dove */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-fiesta-red transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <MapPin className="w-8 h-8 text-fiesta-red mb-4" />
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Dove</h3>
            <p className="text-white font-bold text-lg">{nextEvent.location}</p>
          </motion.div>

          {/* Card Quando */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-fiesta-blue transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Calendar className="w-8 h-8 text-fiesta-blue mb-4" />
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Quando</h3>
            <p className="text-white font-bold text-lg">{nextEvent.date}</p>
            <p className="text-gray-400 text-sm mt-1">{nextEvent.time}</p>
          </motion.div>

          {/* Card Ingresso */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-fiesta-teal transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Ticket className="w-8 h-8 text-fiesta-teal mb-4" />
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Ingresso</h3>
            <p className="text-white font-bold text-lg">Gratuito</p>
            <p className="text-gray-400 text-sm mt-1">Aperto a tutti</p>
          </motion.div>

          {/* Card Cena */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-fiesta-red transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <UtensilsCrossed className="w-8 h-8 text-fiesta-red mb-4" />
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Cena</h3>
            <p className="text-white font-bold text-lg">Prenota Ora</p>
            <p className="text-gray-400 text-sm mt-1">Posti limitati</p>
          </motion.div>
        </div>

        {/* CTA finale */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="primary"
            size="lg"
            className="inline-flex items-center gap-2"
            onClick={() => window.open('https://aperifiesta.it', '_blank')}
          >
            <Music className="w-5 h-5" />
            Info & Prenotazioni
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NextEvent;
