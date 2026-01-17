'use client';

import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '',
  hoverable = true,
  gradient = false,
  ...props 
}) {
  const baseClasses = `
    p-8 rounded-3xl border-2 border-orange-200
    ${gradient ? 'bg-gradient-to-br from-orange-50 to-white' : 'bg-white'}
    shadow-md
    ${className}
  `;

  const hoverProps = hoverable ? {
    whileHover: {
      scale: 1.02,
      borderColor: '#ea580c',
      boxShadow: '0 20px 60px rgba(234, 88, 12, 0.2)',
    },
    transition: { duration: 0.3 }
  } : {};

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...hoverProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}