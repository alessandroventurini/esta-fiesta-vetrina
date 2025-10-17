import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 shadow-lg ${className}`}
      whileHover={hover ? { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" } : {}}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
