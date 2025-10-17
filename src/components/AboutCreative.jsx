import { motion } from 'framer-motion';
import { Sparkles, Heart, Music } from 'lucide-react';
import logoAF from '../assets/log_af.svg';

const AboutCreative = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Blob Decorativi Background - hidden su mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute -left-32 top-20 w-96 h-96 bg-fiesta-blue/10 blur-3xl"
          style={{
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
          }}
          animate={{
            borderRadius: [
              '63% 37% 54% 46% / 55% 48% 52% 45%',
              '48% 52% 68% 32% / 42% 28% 72% 58%',
              '63% 37% 54% 46% / 55% 48% 52% 45%',
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute -right-32 bottom-20 w-80 h-80 bg-fiesta-red/10 blur-3xl"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          }}
          animate={{
            borderRadius: [
              '40% 60% 70% 30% / 40% 50% 60% 50%',
              '52% 48% 33% 67% / 47% 45% 55% 53%',
              '40% 60% 70% 30% / 40% 50% 60% 50%',
            ],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Testo Principale - Posizionamento Creativo */}
          <motion.div
            className="lg:col-span-7 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge Floating */}
            <motion.div
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-fiesta-blue/20 to-fiesta-red/20 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-fiesta-red font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Eventi & Socialità
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-white mb-6 leading-tight">
              Chi Siamo
            </h2>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Dal 2023 organizziamo eventi che uniscono <strong>cibo autentico, musica dal vivo 
                e atmosfera unica</strong>. Insieme ad Aperipirlo e Orgoglio Bresciano abbiamo 
                creato il format <img src={logoAF} alt="APERIFIESTA" className="inline h-10 md:h-12 align-middle mx-1" />.
              </p>
              
              <p>
                <strong>Stand gastronomici di qualità, cocktail bar curati, DJ set selezionati</strong>. 
                Un'esperienza completa che porta energia nelle piazze e crea ricordi indimenticabili.
              </p>
            </div>

            {/* Icon Features in stile organico */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: Sparkles, text: 'Atmosfera Unica' },
                { icon: Heart, text: 'Qualità Garantita' },
                { icon: Music, text: 'Fino a Tardi' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`flex items-center gap-3 px-6 py-3 bg-fiesta-red/10 text-fiesta-red rounded-full`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card Fluttuante con Stat - Posizione Asimmetrica */}
          <motion.div
            className="lg:col-span-5 relative w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Card con Forma Organica */}
            <motion.div
              className="relative bg-gradient-to-br from-fiesta-blue to-fiesta-teal p-12 md:p-14 lg:p-16 text-white shadow-2xl w-full"
              style={{
                borderRadius: '40% 60% 55% 45% / 45% 50% 50% 55%',
                maxWidth: '100%',
                overflow: 'hidden'
              }}
              animate={{
                borderRadius: [
                  '40% 60% 55% 45% / 45% 50% 50% 55%',
                  '45% 55% 50% 50% / 50% 50% 50% 50%',
                  '40% 60% 55% 45% / 45% 50% 50% 55%',
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Pattern Decorativo */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Sparkles className="w-12 h-12 mb-6" />
                </motion.div>
                
                <h3 className="text-5xl md:text-6xl font-bold mb-2 font-montserrat">
                  3 
                </h3>
                <p className="text-xl mb-3">Feste/Anno</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Ogni evento è curato nei minimi dettagli. 
                  Qualità sopra ogni cosa.
                </p>
              </div>
            </motion.div>

            {/* Card Secondaria Sovrapposta - hidden su mobile */}
            <motion.div
              className="hidden lg:flex absolute -top-6 -right-6 bg-fiesta-red p-6 text-white shadow-xl z-20 items-center justify-center"
              style={{
                borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%',
                width: '180px',
                height: '180px',
                overflow: 'hidden'
              }}
              animate={{
                y: [0, -10, 0],
                borderRadius: [
                  '52% 48% 33% 67% / 47% 45% 55% 53%',
                  '63% 37% 54% 46% / 55% 48% 52% 45%',
                  '52% 48% 33% 67% / 47% 45% 55% 53%',
                ],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.6 } }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <Heart className="w-8 h-8 mb-2" />
                <p className="text-center text-sm font-bold">
                  Party
                  <br />
                  + Solidarietà
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreative;
