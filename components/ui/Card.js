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
    p-8 rounded-3xl border-2 border-[#a59069]/20
    ${gradient ? 'bg-gradient-to-br from-[#f5f1e8] to-white' : 'bg-white'}
    ${className}
  `;

  const hoverProps = hoverable ? {
    whileHover: {
      scale: 1.02,
      borderColor: '#72471c',
      boxShadow: '0 20px 60px rgba(114, 71, 28, 0.15)',
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
