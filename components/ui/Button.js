'use client';

import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  disabled = false,
  icon = null,
  ...props 
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-orange-600 via-orange-500 to-red-900 text-white hover:shadow-xl shadow-lg',
    secondary: 'bg-orange-500 text-white hover:bg-red-900 shadow-md',
    outline: 'bg-white text-orange-900 border-2 border-orange-600 hover:bg-orange-600 hover:text-white',
    ghost: 'bg-transparent text-orange-900 hover:bg-orange-50',
    danger: 'bg-red-900 text-white hover:bg-red-700 shadow-md',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-full font-semibold
        transition-all duration-300
        flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}