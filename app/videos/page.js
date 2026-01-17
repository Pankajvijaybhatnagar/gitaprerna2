'use client';

import { motion } from 'framer-motion';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useVideoStore } from '../../lib/store';
import { Video as VideoIcon, Play } from 'lucide-react';

export default function VideosPage() {
  const videos = useVideoStore((state) => state.getVideos());

  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

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
            🎬
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            महाराज जी के वीडियो
          </motion.h1>
          
          <motion.h2
            className="text-3xl md:text-4xl mb-8 text-orange-100 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maharaj Ji's Videos
          </motion.h2>
          
          <motion.p
            className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Watch divine teachings and spiritual discourses
          </motion.p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {videos.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <VideoIcon size={80} className="mx-auto mb-6 text-orange-400" />
              <h3 className="text-3xl font-bold text-orange-900 mb-4">
                No Videos Yet
              </h3>
              <p className="text-xl text-orange-600">
                Spiritual videos will appear here once added
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => {
                const videoId = getYouTubeId(video.youtubeUrl);
                
                return (
                  <motion.div
                    key={video.id}
                    className="bg-gradient-to-br from-orange-50 to-white rounded-3xl overflow-hidden border-2 border-orange-200 shadow-md hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Video Embed */}
                    <div className="relative aspect-video bg-orange-900">
                      {videoId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center text-white">
                            <Play size={64} className="mx-auto mb-4 opacity-50" />
                            <p className="text-sm opacity-70">Invalid YouTube URL</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Video Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-orange-900 mb-3">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="text-orange-600 leading-relaxed mb-4">
                          {video.description}
                        </p>
                      )}
                      {videoId && (
                        <a
                          href={video.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-orange-900 hover:text-red-900 font-semibold transition-colors"
                        >
                          <Play size={20} />
                          Watch on YouTube
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-orange-600 mb-12 leading-relaxed">
              Subscribe to receive updates on new spiritual teachings and videos
            </p>
            <div className="text-6xl mb-8">🙏</div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}