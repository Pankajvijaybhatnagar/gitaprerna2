'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { useChapterStore } from '../../../lib/store';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

export default function ChapterPage({ params }) {
  const { id } = use(params);
  const chapter = useChapterStore((state) => state.getChapterById(id));

  if (!chapter) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen size={80} className="mx-auto mb-6 text-orange-400" />
            <h2 className="text-4xl font-bold text-orange-900 mb-4 text-center">
              Chapter Not Found
            </h2>
            <p className="text-xl text-orange-600 mb-8 text-center">
              The chapter you're looking for doesn't exist
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/chapters">
                <motion.button
                  className="px-8 py-3 rounded-full text-white font-semibold shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Chapters
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const chapterId = parseInt(id);
  const prevChapter = chapterId > 1 ? chapterId - 1 : null;
  const nextChapter = chapterId < 18 ? chapterId + 1 : null;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-500 to-red-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='20' y='60' font-family='serif' font-size='50' fill='white'%3Eॐ%3C/text%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            अध्याय {chapter.id}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {chapter.titleHindi}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl mb-6 text-orange-100 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {chapter.titleEnglish}
          </motion.h2>

          <motion.div
            className="inline-block px-6 py-2 rounded-full text-lg font-semibold bg-white/20 text-white backdrop-blur-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {chapter.verses} श्लोक | {chapter.verses} Verses
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl border-2 border-orange-200 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent">
              सारांश | Summary
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-orange-600">
                  हिंदी में:
                </h4>
                <p className="text-lg leading-relaxed text-orange-900/80">
                  {chapter.summaryHindi}
                </p>
              </div>
              <div className="h-px bg-orange-300" />
              <div>
                <h4 className="text-xl font-semibold mb-3 text-orange-600">
                  In English:
                </h4>
                <p className="text-lg leading-relaxed text-orange-900/80">
                  {chapter.summaryEnglish}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Teachings Section */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            मुख्य शिक्षाएं | Key Teachings
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hindi Teachings */}
            <motion.div
              className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-6 text-orange-900">
                हिंदी में
              </h4>
              <ul className="space-y-4">
                {chapter.keyTeachingsHindi.map((teaching, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="text-2xl text-orange-500 mt-1">•</span>
                    <span className="text-lg leading-relaxed text-orange-900/80">
                      {teaching}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* English Teachings */}
            <motion.div
              className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-6 text-orange-900">
                In English
              </h4>
              <ul className="space-y-4">
                {chapter.keyTeachingsEnglish.map((teaching, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="text-2xl text-orange-500 mt-1">•</span>
                    <span className="text-lg leading-relaxed text-orange-900/80">
                      {teaching}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Explanation Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            विस्तृत व्याख्या | Detailed Explanation
          </motion.h3>

          <motion.div
            className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl mb-8 border-2 border-orange-200 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl font-semibold mb-6 text-orange-600">
              हिंदी में विस्तृत व्याख्या
            </h4>
            <p className="text-lg leading-relaxed text-orange-900/80">
              {chapter.detailedExplanationHindi}
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl border-2 border-orange-200 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-2xl font-semibold mb-6 text-orange-600">
              Detailed Explanation in English
            </h4>
            <p className="text-lg leading-relaxed text-orange-900/80">
              {chapter.detailedExplanationEnglish}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Previous Chapter */}
            {prevChapter ? (
              <Link href={`/chapter/${prevChapter}`}>
                <motion.div
                  className="bg-white p-6 rounded-2xl cursor-pointer text-left border-2 border-orange-200 h-full shadow-md"
                  whileHover={{
                    scale: 1.02,
                    borderColor: '#ea580c',
                    boxShadow: '0 10px 40px rgba(234, 88, 12, 0.2)',
                  }}
                >
                  <div className="flex items-center gap-2 text-sm mb-2 text-orange-600">
                    <ArrowLeft size={16} />
                    <span>Previous Chapter</span>
                  </div>
                  <div className="text-xl font-bold text-orange-900">
                    अध्याय {prevChapter}
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}

            {/* All Chapters Button */}
            <Link href="/chapters">
              <motion.button
                className="w-full h-full px-8 py-6 rounded-2xl font-semibold text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Chapters
              </motion.button>
            </Link>

            {/* Next Chapter */}
            {nextChapter ? (
              <Link href={`/chapter/${nextChapter}`}>
                <motion.div
                  className="bg-white p-6 rounded-2xl cursor-pointer text-right border-2 border-orange-200 h-full shadow-md"
                  whileHover={{
                    scale: 1.02,
                    borderColor: '#ea580c',
                    boxShadow: '0 10px 40px rgba(234, 88, 12, 0.2)',
                  }}
                >
                  <div className="flex items-center justify-end gap-2 text-sm mb-2 text-orange-600">
                    <span>Next Chapter</span>
                    <ArrowRight size={16} />
                  </div>
                  <div className="text-xl font-bold text-orange-900">
                    अध्याय {nextChapter}
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}