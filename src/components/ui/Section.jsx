import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id,
  className = '',
  bgColor = 'bg-white',
  title,
  subtitle,
  centered = false
}) => {
  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${bgColor} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {(title || subtitle) && (
          <motion.div 
            className={`mb-12 ${centered ? 'text-center' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-fiesta-dark mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
