'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { BookOpen, Sparkles, Heart, Users, ChevronRight, Scroll, Star, Flame } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [selectedChapter, setSelectedChapter] = useState(1);

  const features = [
    {
      icon: <BookOpen size={40} />,
      titleHindi: "18 अध्याय",
      titleEnglish: "18 Chapters",
      description: "Complete Bhagavad Gita with detailed explanations"
    },
    {
      icon: <Sparkles size={40} />,
      titleHindi: "हिंदी और अंग्रेजी",
      titleEnglish: "Hindi & English",
      description: "Bilingual content for better understanding"
    },
    {
      icon: <Heart size={40} />,
      titleHindi: "गहन ज्ञान",
      titleEnglish: "Deep Wisdom",
      description: "Key teachings and profound insights"
    },
    {
      icon: <Users size={40} />,
      titleHindi: "सभी के लिए",
      titleEnglish: "For Everyone",
      description: "Accessible spiritual knowledge for all"
    }
  ];

  const chapters = [
    {
      number: 1,
      nameHindi: "अर्जुन विषाद योग",
      nameEnglish: "Arjuna Vishada Yoga",
      subtitle: "The Yoga of Arjuna's Dejection",
      verses: 47,
      glimpse: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
      translation: "Whenever there is decline of righteousness, O Bharata...",
      description: "Arjuna's moral dilemma on the battlefield of Kurukshetra, questioning the righteousness of war against his own kinsmen.",
      theme: "Confusion and despair",
      color: "#FF6B35"
    },
    {
      number: 2,
      nameHindi: "सांख्य योग",
      nameEnglish: "Sankhya Yoga",
      subtitle: "The Yoga of Knowledge",
      verses: 72,
      glimpse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
      translation: "You have the right to work only, but never to its fruits...",
      description: "Krishna teaches Arjuna about the eternal soul, the nature of reality, and the path of selfless action.",
      theme: "Knowledge of the self",
      color: "#F7931E"
    },
    {
      number: 3,
      nameHindi: "कर्म योग",
      nameEnglish: "Karma Yoga",
      subtitle: "The Yoga of Action",
      verses: 43,
      glimpse: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।",
      translation: "Better is one's own duty, though imperfect...",
      description: "The importance of performing one's duty without attachment to results and the concept of selfless service.",
      theme: "Path of selfless action",
      color: "#DC2626"
    },
    {
      number: 4,
      nameHindi: "ज्ञान कर्म संन्यास योग",
      nameEnglish: "Jnana Karma Sanyasa Yoga",
      subtitle: "The Yoga of Wisdom and Action",
      verses: 42,
      glimpse: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
      translation: "Whenever righteousness declines and unrighteousness rises...",
      description: "Divine incarnations, the significance of sacrifice, and the relationship between knowledge and action.",
      theme: "Divine manifestation",
      color: "#ea580c"
    },
    {
      number: 5,
      nameHindi: "कर्म संन्यास योग",
      nameEnglish: "Karma Sanyasa Yoga",
      subtitle: "The Yoga of Renunciation",
      verses: 29,
      glimpse: "योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः।",
      translation: "One who is purified, master of self and senses...",
      description: "The path of renunciation and the yoga of action, explaining their complementary nature.",
      theme: "Renunciation through action",
      color: "#fb923c"
    },
    {
      number: 6,
      nameHindi: "ध्यान योग",
      nameEnglish: "Dhyana Yoga",
      subtitle: "The Yoga of Meditation",
      verses: 47,
      glimpse: "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना।",
      translation: "Among all yogis, one who meditates on Me...",
      description: "The practice of meditation, controlling the mind, and achieving inner peace and self-realization.",
      theme: "Meditation and mind control",
      color: "#f97316"
    },
    {
      number: 7,
      nameHindi: "ज्ञान विज्ञान योग",
      nameEnglish: "Jnana Vijnana Yoga",
      subtitle: "The Yoga of Knowledge and Wisdom",
      verses: 30,
      glimpse: "मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये।",
      translation: "Among thousands of people, hardly one strives for perfection...",
      description: "The distinction between material and spiritual knowledge, and the nature of the Supreme.",
      theme: "Divine knowledge",
      color: "#FF6B35"
    },
    {
      number: 8,
      nameHindi: "अक्षर ब्रह्म योग",
      nameEnglish: "Aksara Brahma Yoga",
      subtitle: "The Yoga of the Imperishable Absolute",
      verses: 28,
      glimpse: "ॐ इत्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन्।",
      translation: "Uttering the sacred syllable Om, meditating on Me...",
      description: "The imperishable Brahman, the supreme destination, and the moment of death's significance.",
      theme: "Path to the Supreme",
      color: "#F7931E"
    },
    {
      number: 9,
      nameHindi: "राज विद्या राज गुह्य योग",
      nameEnglish: "Raja Vidya Raja Guhya Yoga",
      subtitle: "The Yoga of Royal Knowledge",
      verses: 34,
      glimpse: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।",
      translation: "Fix your mind on Me, be devoted to Me...",
      description: "The most confidential knowledge about devotion and God's immanence in all creation.",
      theme: "Supreme secret",
      color: "#DC2626"
    },
    {
      number: 10,
      nameHindi: "विभूति योग",
      nameEnglish: "Vibhuti Yoga",
      subtitle: "The Yoga of Divine Glories",
      verses: 42,
      glimpse: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।",
      translation: "Whatever is glorious, prosperous, or powerful...",
      description: "The divine manifestations and glories of the Supreme in the material world.",
      theme: "Divine manifestations",
      color: "#ea580c"
    },
    {
      number: 11,
      nameHindi: "विश्वरूप दर्शन योग",
      nameEnglish: "Vishvarupa Darshana Yoga",
      subtitle: "The Yoga of the Universal Form",
      verses: 55,
      glimpse: "काल: अस्मि लोकक्षयकृत्प्रवृद्धो।",
      translation: "I am Time, the great destroyer of worlds...",
      description: "Krishna reveals His universal form to Arjuna, displaying the entire cosmos within Him.",
      theme: "Cosmic vision",
      color: "#fb923c"
    },
    {
      number: 12,
      nameHindi: "भक्ति योग",
      nameEnglish: "Bhakti Yoga",
      subtitle: "The Yoga of Devotion",
      verses: 20,
      glimpse: "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते।",
      translation: "Those who follow this immortal dharma with faith...",
      description: "The path of devotion and love towards God as the highest form of yoga.",
      theme: "Path of devotion",
      color: "#f97316"
    },
    {
      number: 13,
      nameHindi: "क्षेत्र क्षेत्रज्ञ विभाग योग",
      nameEnglish: "Kshetra Kshetrajna Vibhaga Yoga",
      subtitle: "The Yoga of the Field and Knower",
      verses: 35,
      glimpse: "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि।",
      translation: "Know that both nature and the soul are beginningless...",
      description: "The distinction between the body (field) and the soul (knower of the field).",
      theme: "Matter and spirit",
      color: "#FF6B35"
    },
    {
      number: 14,
      nameHindi: "गुणत्रय विभाग योग",
      nameEnglish: "Gunatraya Vibhaga Yoga",
      subtitle: "The Yoga of Three Modes",
      verses: 27,
      glimpse: "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः।",
      translation: "Goodness, passion, and ignorance - these qualities born of nature...",
      description: "The three modes of material nature (gunas) and their influence on living beings.",
      theme: "Three modes of nature",
      color: "#F7931E"
    },
    {
      number: 15,
      nameHindi: "पुरुषोत्तम योग",
      nameEnglish: "Purushottama Yoga",
      subtitle: "The Yoga of the Supreme Person",
      verses: 20,
      glimpse: "यो मामेवमसम्मूढो जानाति पुरुषोत्तमम्।",
      translation: "One who knows Me as the Supreme Person...",
      description: "The Supreme Person who transcends both the perishable and imperishable.",
      theme: "Supreme being",
      color: "#DC2626"
    },
    {
      number: 16,
      nameHindi: "दैवासुर सम्पद विभाग योग",
      nameEnglish: "Daivasura Sampad Vibhaga Yoga",
      subtitle: "The Yoga of Divine and Demonic",
      verses: 24,
      glimpse: "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।",
      translation: "Fearlessness, purity of heart, steadfastness in knowledge...",
      description: "The divine and demonic qualities in human beings and their consequences.",
      theme: "Divine vs demonic traits",
      color: "#ea580c"
    },
    {
      number: 17,
      nameHindi: "श्रद्धात्रय विभाग योग",
      nameEnglish: "Shraddhatraya Vibhaga Yoga",
      subtitle: "The Yoga of Three Kinds of Faith",
      verses: 28,
      glimpse: "ॐ तत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः।",
      translation: "Om Tat Sat - these are the three designations of Brahman...",
      description: "The three types of faith corresponding to the three gunas and their expressions.",
      theme: "Types of faith",
      color: "#fb923c"
    },
    {
      number: 18,
      nameHindi: "मोक्ष संन्यास योग",
      nameEnglish: "Moksha Sanyasa Yoga",
      subtitle: "The Yoga of Liberation",
      verses: 78,
      glimpse: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।",
      translation: "Abandon all varieties of dharmas and surrender unto Me alone...",
      description: "The culmination of all teachings, the path to final liberation, and complete surrender.",
      theme: "Ultimate liberation",
      color: "#f97316"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden om-pattern">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 text-8xl opacity-10 text-orange-600"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ॐ
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-8xl opacity-10 text-red-900"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ॐ
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Om Symbol */}
          <motion.div
            className="text-9xl mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          >
            <span className="text-gradient">ॐ</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            गीता प्रेरणा
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-5xl mb-8 text-orange-600 font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Bhagavad Gita - The Divine Song
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-orange-800/80 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Experience the timeless wisdom of the Bhagavad Gita. 
            Explore divine teachings that illuminate the path to self-realization and inner peace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/chapters">
              <motion.button
                className="px-10 py-4 rounded-full text-xl font-semibold text-white shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(234, 88, 12, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Chapters
              </motion.button>
            </Link>

            <Link href="/admin">
              <motion.button
                className="px-10 py-4 rounded-full text-xl font-semibold text-orange-900 bg-white border-2 border-orange-600"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#ea580c',
                  color: 'white',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Admin Panel
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-orange-600 rounded-full"
                animate={{
                  y: [0, 16, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent mb-4">
              विशेषताएं
            </h2>
            <p className="text-2xl text-orange-600">Features</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border-2 border-orange-200 card-hover cursor-pointer shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  borderColor: '#ea580c',
                }}
              >
                <motion.div
                  className="text-orange-600 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-900 mb-2">
                  {feature.titleHindi}
                </h3>
                <h4 className="text-lg text-orange-600 mb-3 font-semibold">
                  {feature.titleEnglish}
                </h4>
                <p className="text-orange-900/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 18 Chapters Showcase Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Scroll className="text-orange-600" size={48} />
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent">
                18 अध्याय
              </h2>
              <Scroll className="text-orange-600" size={48} />
            </div>
            <p className="text-2xl text-orange-600 mb-4">18 Chapters of Divine Wisdom</p>
            <p className="text-lg text-orange-900/70 max-w-3xl mx-auto">
              Explore the complete journey of spiritual enlightenment through all eighteen chapters of the Bhagavad Gita
            </p>
          </motion.div>

          {/* Chapter Display with Grid Navigation */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-0">
              {/* Left Side - Chapter Content */}
              <motion.div
                className="p-8 md:p-12 bg-gradient-to-br from-orange-50 to-white"
                key={selectedChapter}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Chapter Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${chapters[selectedChapter - 1].color} 0%, ${chapters[selectedChapter - 1].color}dd 100%)`
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {selectedChapter}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-orange-900 mb-1">
                        {chapters[selectedChapter - 1].nameHindi}
                      </h3>
                      <p className="text-xl text-orange-600 font-semibold">
                        {chapters[selectedChapter - 1].nameEnglish}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-orange-900/70 italic mb-2">
                    {chapters[selectedChapter - 1].subtitle}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-orange-600">
                    <span className="flex items-center gap-1">
                      <BookOpen size={16} />
                      {chapters[selectedChapter - 1].verses} Verses
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={16} />
                      {chapters[selectedChapter - 1].theme}
                    </span>
                  </div>
                </div>

                {/* Shloka Glimpse */}
                <div className="mb-8 p-6 bg-white rounded-2xl border-2 border-orange-200 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <Flame className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-sm font-semibold text-orange-600 mb-2 uppercase tracking-wide">
                        Key Shloka
                      </h4>
                      <p className="text-2xl md:text-3xl font-bold text-orange-900 mb-3 leading-relaxed">
                        {chapters[selectedChapter - 1].glimpse}
                      </p>
                      <p className="text-lg text-orange-900/80 italic leading-relaxed">
                        "{chapters[selectedChapter - 1].translation}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chapter Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
                    <Sparkles size={20} />
                    Chapter Overview
                  </h4>
                  <p className="text-lg text-orange-900/80 leading-relaxed">
                    {chapters[selectedChapter - 1].description}
                  </p>
                </div>

                {/* Read More Button */}
                <Link href={`/chapters/${selectedChapter}`}>
                  <motion.button
                    className="px-8 py-4 rounded-full text-lg font-semibold text-white shadow-xl flex items-center gap-2"
                    style={{
                      background: `linear-gradient(135deg, ${chapters[selectedChapter - 1].color} 0%, ${chapters[selectedChapter - 1].color}cc 100%)`
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(234, 88, 12, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Full Chapter
                    <ChevronRight size={20} />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Right Side - Chapter Grid Navigation */}
              <div className="bg-gradient-to-br from-orange-100/50 to-red-100/50 p-8 md:p-12">
                <div className="sticky top-8">
                  <div className="bg-gradient-to-r from-orange-600 to-red-900 text-white px-6 py-3 rounded-t-2xl text-center mb-6">
                    <h4 className="text-xl font-bold">Chapter {selectedChapter}</h4>
                  </div>
                  
                  <motion.div
                    className="grid grid-cols-6 gap-2 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {chapters.map((chapter) => (
                      <motion.button
                        key={chapter.number}
                        variants={itemVariants}
                        onClick={() => setSelectedChapter(chapter.number)}
                        className={`aspect-square rounded-xl font-bold text-lg transition-all duration-300 ${
                          selectedChapter === chapter.number
                            ? 'bg-gradient-to-br from-orange-600 to-red-900 text-white shadow-lg scale-110'
                            : 'bg-white text-orange-900 hover:bg-orange-500 hover:text-white shadow-md'
                        }`}
                        whileHover={{
                          scale: selectedChapter === chapter.number ? 1.1 : 1.05,
                          rotate: selectedChapter === chapter.number ? 0 : 3,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {chapter.number}
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Chapter List */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg max-h-[400px] overflow-y-auto custom-scrollbar">
                    {chapters.map((chapter) => (
                      <motion.button
                        key={chapter.number}
                        onClick={() => setSelectedChapter(chapter.number)}
                        className={`w-full text-left p-3 rounded-xl mb-2 transition-all duration-300 ${
                          selectedChapter === chapter.number
                            ? 'bg-gradient-to-r from-orange-600 to-red-900 text-white shadow-md'
                            : 'hover:bg-orange-50 text-orange-900'
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-lg">{chapter.number}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">
                              {chapter.nameEnglish}
                            </p>
                            <p className="text-xs opacity-75">
                              {chapter.verses} verses
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-500 to-red-900" />
        <div className="absolute inset-0 om-pattern opacity-5" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-8 text-orange-100">ॐ</div>
            <blockquote className="text-3xl md:text-4xl font-light text-white mb-6 leading-relaxed">
              "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
            </blockquote>
            <p className="text-xl md:text-2xl text-orange-100 font-light">
              You have the right to perform your duty, but not to the fruits of your actions
            </p>
            <p className="text-lg text-orange-100/70 mt-6">
              — Bhagavad Gita 2.47
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "18", label: "Chapters", sublabel: "अध्याय" },
              { number: "700", label: "Verses", sublabel: "श्लोक" },
              { number: "∞", label: "Wisdom", sublabel: "ज्ञान" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: '#ea580c',
                }}
              >
                <motion.div
                  className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-600 mb-2">{stat.label}</h3>
                <p className="text-xl text-orange-900/70">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent mb-6">
              Begin Your Journey
            </h2>
            <p className="text-xl text-orange-600 mb-12 leading-relaxed">
              Dive into the profound teachings of the Bhagavad Gita and discover wisdom that transcends time
            </p>
            <Link href="/chapters">
              <motion.button
                className="px-12 py-5 rounded-full text-2xl font-semibold text-white shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(234, 88, 12, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Reading →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fff7ed;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ea580c;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #dc2626;
        }
      `}</style>
    </div>
  );
}