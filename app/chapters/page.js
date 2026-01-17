'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useChapterStore } from '../../lib/store';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function ChaptersPage() {
  const chapters = useChapterStore((state) => state.getChapters());

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-500 to-red-900" />
        <div className="absolute inset-0 om-pattern opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            className="text-7xl mb-6 text-orange-100"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            ॐ
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            १८ अध्याय
          </motion.h1>
          
          <motion.h2
            className="text-3xl md:text-4xl mb-8 text-orange-100 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            18 Chapters of the Bhagavad Gita
          </motion.h2>
          
          <motion.p
            className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore the divine dialogue between Lord Krishna and Arjuna on the battlefield of Kurukshetra
          </motion.p>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {chapters.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <BookOpen size={64} className="mx-auto mb-6 text-orange-400" />
              <h3 className="text-3xl font-bold text-orange-900 mb-4">
                No Chapters Available
              </h3>
              <p className="text-xl text-orange-600 mb-8">
                Please add chapters from the admin panel
              </p>
              <Link href="/admin">
                <motion.button
                  className="px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go to Admin Panel
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Link href={`/chapter/${chapter.id}`}>
                    <motion.div
                      className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl h-full cursor-pointer relative overflow-hidden border-2 border-orange-200 shadow-md"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 20px 60px rgba(234, 88, 12, 0.2)',
                        borderColor: '#ea580c',
                      }}
                    >
                      {/* Chapter Number Badge */}
                      <motion.div
                        className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {chapter.id}
                      </motion.div>

                      {/* Content */}
                      <div className="pr-20 mb-6">
                        <h3 className="text-2xl font-bold mb-3 text-orange-900">
                          {chapter.titleHindi}
                        </h3>
                        <h4 className="text-lg mb-4 text-orange-600 font-medium">
                          {chapter.titleEnglish}
                        </h4>
                      </div>

                      <p className="text-sm mb-6 line-clamp-3 text-orange-900/70 leading-relaxed">
                        {chapter.summaryEnglish}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-orange-600">
                          {chapter.verses} श्लोक | Verses
                        </div>
                        <motion.div
                          className="text-orange-900"
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight size={24} />
                        </motion.div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-900/5 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}