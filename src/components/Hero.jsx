import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Users, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import heroImage from '../assets/IMG_1922.JPG';
import logoSvg from '../assets/logo.svg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Calendar, value: '3', label: 'Eventi/Anno' },
    { icon: MapPin, value: '10+', label: 'Format Coinvolti' },
    { icon: Users, value: '20+', label: 'Eventi Realizzati' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax & Advanced Gradient */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroImage} 
          alt="ESTA FIESTA" 
          className="w-full h-full object-cover"
        />
        {/* Multiple gradient overlays per depth - maggiore opacità per leggibilità */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/50 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-fiesta-red/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-fiesta-teal/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          
          {/* Left Content - Hero Text */}
          <motion.div 
            className="lg:col-span-7 text-white"
            style={{ opacity }}
          >

            {/* Logo - Creative Party Effect: 3D Tilt + RGB Split */}
            <motion.div
              className="mb-8 relative inline-block perspective-1000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo principale con 3D tilt e RGB chromatic aberration */}
              <motion.div
                className="relative"
                initial={{ 
                  rotateX: -30, 
                  rotateY: -15,
                  scale: 0.8,
                  opacity: 0 
                }}
                animate={{ 
                  rotateX: 0,
                  rotateY: 0,
                  scale: 1,
                  opacity: 1
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* RGB Split layers - Red channel */}
                <motion.img 
                  src={logoSvg} 
                  alt="" 
                  className="h-24 md:h-32 lg:h-40 w-auto absolute top-0 left-0 opacity-30"
                  style={{
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.1) contrast(1.05)',
                    transform: 'scaleY(0.85)',
                  }}
                  animate={{
                    x: [-0.5, 0.5, -0.5],
                    y: [0.3, -0.3, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  aria-hidden="true"
                />

                {/* RGB Split layers - Blue channel */}
                <motion.img 
                  src={logoSvg} 
                  alt="" 
                  className="h-24 md:h-32 lg:h-40 w-auto absolute top-0 left-0 opacity-30"
                  style={{
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.1) contrast(1.05) hue-rotate(180deg)',
                    transform: 'scaleY(0.85)',
                  }}
                  animate={{
                    x: [0.5, -0.5, 0.5],
                    y: [-0.3, 0.3, -0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  aria-hidden="true"
                />
                
                {/* Logo principale (verde/giallo channel) */}
                <motion.img 
                  src={logoSvg} 
                  alt="ESTA FIESTA" 
                  className="h-24 md:h-32 lg:h-40 w-auto relative z-10"
                  animate={{
                    y: [-2, 2, -2],
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    filter: 'drop-shadow(0 8px 24px rgba(77,146,208,0.3)) drop-shadow(0 4px 12px rgba(194,56,76,0.2))',
                    transform: 'scaleY(0.85)',
                  }}
                />
              </motion.div>

              {/* Energy particles che escono dal logo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#4D92D0' : '#C2384C',
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, Math.cos(i * 60 * Math.PI / 180) * 80],
                    y: [0, Math.sin(i * 60 * Math.PI / 180) * 80],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mangi. Bevi.{' '}
              <span className="">
                Balli.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              L'aperitivo che diventa festa. Stand gastronomici, cocktail e DJ set fino a tarda notte. 
              <span className="text-white font-semibold"> La tua serata perfetta</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => handleScroll('#next-event')}
                className="group"
              >
                Prossimo Evento
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => handleScroll('#collabora')}
              >
                Organizza con Noi
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Stats Cards */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative h-[600px]">
              {stats.map((stat, idx) => {
                const positions = [
                  { top: '0', right: '0' },
                  { top: '40%', right: '20%' },
                  { bottom: '10%', right: '10%' }
                ];
                
                return (
                  <motion.div
                    key={idx}
                    className="absolute"
                    style={positions[idx]}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                  >
                    <motion.div
                      className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 min-w-[180px]"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      animate={{ y: [0, -10, 0] }}
                      style={{
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          delay: idx * 0.3
                        }
                      }}
                    >
                      <stat.icon className="w-8 h-8 text-fiesta-blue mb-3" />
                      <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-gray-400 text-sm font-semibold">{stat.label}</p>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Decorative connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.path
                  d="M 100 50 Q 150 200 180 350"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4D92D0" />
                    <stop offset="100%" stopColor="#C2384C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Redesigned (nascosto su mobile) */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-white/60 text-sm font-semibold tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
