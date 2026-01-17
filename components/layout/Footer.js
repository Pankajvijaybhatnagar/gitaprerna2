'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-orange-600 via-red-500 to-red-900">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-5xl text-orange-100">ॐ</span>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  गीता प्रेरणा
                </span>
                <span className="text-sm text-orange-200">Gita Prerna</span>
              </div>
            </motion.div>
            <p className="text-orange-100 leading-relaxed">
              Experience the timeless wisdom of Bhagavad Gita in Hindi and English.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link href="/">
                <motion.span
                  className="text-orange-100 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Home
                </motion.span>
              </Link>
              <Link href="/chapters">
                <motion.span
                  className="text-orange-100 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  All Chapters
                </motion.span>
              </Link>
              <Link href="/gallery">
                <motion.span
                  className="text-orange-100 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Gallery
                </motion.span>
              </Link>
              <Link href="/videos">
                <motion.span
                  className="text-orange-100 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Videos
                </motion.span>
              </Link>
              <Link href="/donation">
                <motion.span
                  className="text-orange-100 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Donation
                </motion.span>
              </Link>
              <Link href="/admin">
                <motion.span
                  className="text-orange-100 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Admin Panel
                </motion.span>
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <p className="text-orange-100 leading-relaxed mb-4">
              Spread the wisdom of the Gita and inspire others with its teachings.
            </p>
            <div className="flex gap-4">
              <motion.div
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: '#fb923c' }}
              >
                <span className="text-white text-xl">📧</span>
              </motion.div>
              <motion.div
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: '#fb923c' }}
              >
                <span className="text-white text-xl">🐦</span>
              </motion.div>
              <motion.div
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: '#fb923c' }}
              >
                <span className="text-white text-xl">📱</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-orange-400/50 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-orange-100 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2026 Gita Prerna. All rights reserved. | गीता प्रेरणा
          </motion.p>
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-100">Made with</span>
            <motion.span
              className="text-xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🙏
            </motion.span>
            <span className="text-orange-100">and devotion</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}