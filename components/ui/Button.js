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
    primary: 'bg-gradient-to-r from-[#72471c] to-[#a59069] text-white hover:shadow-xl',
    secondary: 'bg-[#a59069] text-white hover:bg-[#72471c]',
    outline: 'bg-white text-[#72471c] border-2 border-[#72471c] hover:bg-[#72471c] hover:text-white',
    ghost: 'bg-transparent text-[#72471c] hover:bg-[#f5f1e8]',
    danger: 'bg-red-600 text-white hover:bg-red-700',
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
