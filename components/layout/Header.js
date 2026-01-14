'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-lg border-b border-[#a59069]/20"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-4xl">ॐ</span>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#72471c]">
                  गीता प्रेरणा
                </span>
                <span className="text-xs text-[#a59069]">Gita Prerna</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <motion.span
                className="text-[#72471c] font-medium hover:text-[#a59069] transition-colors"
                whileHover={{ y: -2 }}
              >
                Home
              </motion.span>
            </Link>
            <Link href="/chapters">
              <motion.span
                className="text-[#72471c] font-medium hover:text-[#a59069] transition-colors"
                whileHover={{ y: -2 }}
              >
                Chapters
              </motion.span>
            </Link>
            <Link href="/gallery">
              <motion.span
                className="text-[#72471c] font-medium hover:text-[#a59069] transition-colors"
                whileHover={{ y: -2 }}
              >
                Gallery
              </motion.span>
            </Link>
            <Link href="/videos">
              <motion.span
                className="text-[#72471c] font-medium hover:text-[#a59069] transition-colors"
                whileHover={{ y: -2 }}
              >
                Videos
              </motion.span>
            </Link>
            <Link href="/donation">
              <motion.span
                className="text-[#72471c] font-medium hover:text-[#a59069] transition-colors"
                whileHover={{ y: -2 }}
              >
                Donation
              </motion.span>
            </Link>
            <Link href="/admin">
              <motion.button
                className="px-6 py-2 rounded-full text-white font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #72471c 0%, #a59069 100%)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Admin
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#72471c]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span className="block py-2 text-[#72471c] font-medium">Home</span>
            </Link>
            <Link href="/chapters" onClick={() => setIsMenuOpen(false)}>
              <span className="block py-2 text-[#72471c] font-medium">Chapters</span>
            </Link>
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>
              <span className="block py-2 text-[#72471c] font-medium">Gallery</span>
            </Link>
            <Link href="/videos" onClick={() => setIsMenuOpen(false)}>
              <span className="block py-2 text-[#72471c] font-medium">Videos</span>
            </Link>
            <Link href="/donation" onClick={() => setIsMenuOpen(false)}>
              <span className="block py-2 text-[#72471c] font-medium">Donation</span>
            </Link>
            <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
              <span className="block py-2 text-[#72471c] font-medium">Admin</span>
            </Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
