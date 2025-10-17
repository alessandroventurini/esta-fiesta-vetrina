import { motion } from 'framer-motion';

const IconBadge = ({ icon: Icon, label, color = 'fiesta-blue' }) => {
  const colorClasses = {
    'fiesta-blue': 'bg-fiesta-blue/10 text-fiesta-blue',
    'fiesta-red': 'bg-fiesta-red/10 text-fiesta-red',
    'fiesta-teal': 'bg-fiesta-teal/10 text-fiesta-teal',
  };

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <motion.div
        className={`w-16 h-16 rounded-full ${colorClasses[color]} flex items-center justify-center`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      <span className="text-sm font-medium text-fiesta-dark text-center">{label}</span>
    </div>
  );
};

export default IconBadge;
