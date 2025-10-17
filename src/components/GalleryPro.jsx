import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, MapPin } from 'lucide-react';

// Import delle foto dalla cartella gallery
import img1 from '../assets/gallery/DSC05140.jpg';
import img2 from '../assets/gallery/DSC05160.jpg';
import img3 from '../assets/gallery/DSC05198.jpg';
import img4 from '../assets/gallery/DSC05258.jpg';
import img5 from '../assets/gallery/DSC05343.jpg';
import img6 from '../assets/gallery/IMG_1919.JPG';
import img7 from '../assets/gallery/IMG_1920.JPG';
import img8 from '../assets/gallery/IMG_1921.JPG';

const GalleryPro = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Tutte le 8 foto reali dalla cartella gallery
  const featuredPhotos = [
    { 
      url: img1, 
      location: 'OKTOBERFIESTA - Aperipirlo',
      badge: '🎉 Evento 2024'
    },
    { 
      url: img2,
      location: 'OKTOBERFIESTA - Aperipirlo',
      badge: '🎵 DJ Set'
    },
    { 
      url: img3,
      location: 'OKTOBERFIESTA - Aperipirlo',
      badge: '🍹 Cocktail Bar'
    },
    { 
      url: img4,
      location: 'OKTOBERFIESTA - Aperipirlo',
      badge: '👥 Crowd'
    },
    { 
      url: img5,
      location: 'OKTOBERFIESTA - Aperipirlo',
      badge: '🔥 Atmosfera'
    },
    { 
      url: img6, 
      location: 'OKTOBERFIESTA - After match',
      badge: '✨ Night Life'
    },
    { 
      url: img7,
      location: 'OKTOBERFIESTA - After match',
      badge: '🎊 Party'
    },
    { 
      url: img8,
      location: 'OKTOBERFIESTA - After match',
      badge: '🎪 Festa'
    },
  ];

  return (
    <>
      <section id="gallery" className="relative py-20 md:py-32 overflow-hidden bg-[#0a0a0a]">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-20 w-96 h-96 bg-fiesta-blue/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-fiesta-red/5 rounded-full blur-3xl" />
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
              className="inline-flex items-center gap-2 bg-fiesta-teal/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ZoomIn className="w-5 h-5 text-fiesta-teal" />
              <span className="text-white font-semibold">Le Nostre Feste</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat text-white mb-4">
              Momenti
              <br />
              <span className="bg-gradient-to-r from-fiesta-blue to-fiesta-red bg-clip-text text-transparent">
                Indimenticabili
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Rivivi l'atmosfera, l'energia e i momenti speciali dei nostri eventi.
            </p>
          </motion.div>

          {/* Gallery Masonry Grid Professionale */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {featuredPhotos.map((photo, index) => {
              // Layout masonry professionale
              const layouts = [
                'col-span-12 md:col-span-6 lg:col-span-6 h-[300px] md:h-[400px]', // Large left
                'col-span-12 md:col-span-6 lg:col-span-6 h-[300px] md:h-[400px]', // Large right
                'col-span-6 md:col-span-4 lg:col-span-4 h-[250px] md:h-[300px]', // Medium
                'col-span-6 md:col-span-4 lg:col-span-4 h-[250px] md:h-[300px]', // Medium
                'col-span-12 md:col-span-4 lg:col-span-4 h-[250px] md:h-[300px]', // Medium
                'col-span-6 md:col-span-6 lg:col-span-6 h-[280px] md:h-[350px]', // Large
                'col-span-6 md:col-span-6 lg:col-span-6 h-[280px] md:h-[350px]', // Large
                'col-span-12 md:col-span-12 lg:col-span-12 h-[300px] md:h-[400px]', // Full width
              ];

              return (
                <motion.div
                  key={index}
                  className={`${layouts[index]} relative group cursor-pointer rounded-2xl overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  {/* Image */}
                  <motion.img
                    src={photo.url}
                    alt={photo.location}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content overlay */}
                  <motion.div
                    className="absolute inset-0 p-6 flex flex-col justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-fiesta-blue flex-shrink-0 mt-1" />
                      <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">
                        {photo.location}
                      </h3>
                    </div>
                    <span className="inline-block bg-fiesta-red/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold w-fit">
                      {photo.badge}
                    </span>
                  </motion.div>

                  {/* Zoom icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ZoomIn className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA text */}
          <motion.p
            className="text-center mt-12 text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Tanti altri momenti da vivere insieme. 
            <span className="text-fiesta-red font-semibold"> Ci vediamo al prossimo evento</span>?
          </motion.p>
        </div>
      </section>

      {/* Lightbox Modal Professionale */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-10 group"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <motion.div
              className="max-w-6xl w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.location}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
              
              <div className="text-center mt-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-fiesta-blue" />
                  <p className="text-white text-2xl font-bold">
                    {selectedPhoto.location}
                  </p>
                </div>
                <span className="inline-block bg-fiesta-red text-white px-6 py-2 rounded-full font-semibold">
                  {selectedPhoto.badge}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPro;
