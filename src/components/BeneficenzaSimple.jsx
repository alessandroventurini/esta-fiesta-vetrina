import { motion } from 'framer-motion';
import { Heart, School, Users as UsersIcon, Home, Droplet } from 'lucide-react';

const BeneficenzaSimple = () => {
  const enti = [
    {
      icon: Heart,
      name: 'Croce Rossa Locale',
      description: 'Supporto alle ambulanze del territorio',
      color: 'fiesta-red'
    },
    {
      icon: School,
      name: 'Scuole del Territorio',
      description: 'Borse di studio per giovani talenti',
      color: 'fiesta-blue'
    },
    {
      icon: UsersIcon,
      name: 'Associazioni Sportive',
      description: 'Sostegno alle squadre giovanili locali',
      color: 'fiesta-teal'
    },
    {
      icon: Home,
      name: 'Centro Anziani',
      description: 'Attività ricreative e assistenza',
      color: 'fiesta-blue'
    },
    {
      icon: Droplet,
      name: 'Associazioni Ambientali',
      description: 'Progetti di sostenibilità locale',
      color: 'fiesta-teal'
    },
  ];

  return (
    <section id="beneficenza" className="relative py-20 md:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Blob Decorativi - hidden su mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-fiesta-red/5 blur-3xl"
          style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }}
          animate={{
            borderRadius: [
              '63% 37% 54% 46% / 55% 48% 52% 45%',
              '40% 60% 70% 30% / 40% 50% 60% 50%',
              '63% 37% 54% 46% / 55% 48% 52% 45%',
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header con layout asimmetrico */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-white mb-6 leading-tight">
              Party +
              <br />
              <span 
                className="text-fiesta-red"
                style={{ textShadow: '0 0 40px rgba(194, 56, 76, 0.8), 0 0 20px rgba(194, 56, 76, 0.6)' }}
              >
                Solidarietà
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Ogni evento supporta enti benefici del territorio. 
              <strong>Festa e impegno sociale vanno di pari passo</strong>.
            </p>
          </motion.div>

          {/* Card Statement con forma organica */}
          <motion.div
            className="relative w-full max-w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-gradient-to-br from-fiesta-red to-fiesta-blue p-12 md:p-14 lg:p-16 text-white shadow-2xl relative w-full"
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
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Pattern decorativo */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 text-center">
                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Heart with complex animation */}
                <motion.div
                  className="inline-block mb-4 relative"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 blur-xl bg-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Heart className="w-16 h-16 mb-4 relative z-10" />
                </motion.div>

                <motion.h3
                  className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Dal 2023
                </motion.h3>
                <motion.p
                  className="text-white/90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Eventi con uno scopo. 
                  <br />
                  Ogni festa sostiene il territorio.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Grid Enti - Layout Asimmetrico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full">
          {enti.map((ente, idx) => {
            const Icon = ente.icon;
            const colorClasses = {
              'fiesta-red': 'bg-fiesta-red/10 text-fiesta-red border-fiesta-red/20',
              'fiesta-blue': 'bg-fiesta-blue/10 text-fiesta-blue border-fiesta-blue/20',
              'fiesta-teal': 'bg-fiesta-teal/10 text-fiesta-teal border-fiesta-teal/20',
            };

            return (
              <motion.div
                key={idx}
                className={`relative bg-gray-900/50 backdrop-blur-sm border-2 ${colorClasses[ente.color]} p-10 md:p-12 shadow-lg hover:shadow-xl transition-shadow w-full max-w-full`}
                style={{
                  borderRadius: idx % 2 === 0 
                    ? '40% 60% 60% 40% / 40% 40% 60% 60%' 
                    : '60% 40% 40% 60% / 60% 60% 40% 40%',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon con background blob */}
                <div className={`relative inline-block mb-4 ${
                  (ente.name === 'Scuole del Territorio' || ente.name === 'Centro Anziani') ? 'ml-4' : ''
                }`}>
                  <motion.div
                    className={`absolute inset-0 ${colorClasses[ente.color]} blur-xl opacity-50`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.2
                    }}
                  />
                  <div className={`relative ${colorClasses[ente.color]} p-3 rounded-2xl`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                <h4 className={`font-bold text-xl font-montserrat text-white mb-2 ${
                  (ente.name === 'Scuole del Territorio' || ente.name === 'Centro Anziani') ? 'ml-4' : ''
                }`}>
                  {ente.name}
                </h4>
                <p className={`text-gray-300 text-sm leading-relaxed ${
                  (ente.name === 'Scuole del Territorio' || ente.name === 'Centro Anziani') ? 'ml-4' : ''
                }`}>
                  {ente.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-3 h-3 ${colorClasses[ente.color]} rounded-full`} />
              </motion.div>
            );
          })}
        </div>

        {/* Call to action bottom */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Vuoi organizzare un evento con noi?{' '}
            <a href="#collabora" className="text-fiesta-red font-semibold hover:underline">
              Scrivici →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeneficenzaSimple;
