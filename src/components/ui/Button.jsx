import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  icon: Icon,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = "font-bold rounded-lg transition-all inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-fiesta-red text-white hover:bg-fiesta-red/90 shadow-lg hover:shadow-glow-red",
    secondary: "border-2 border-fiesta-blue text-fiesta-blue hover:bg-fiesta-blue hover:text-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-fiesta-blue",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </motion.button>
  );
};

export default Button;
