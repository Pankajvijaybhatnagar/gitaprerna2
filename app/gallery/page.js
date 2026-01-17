'use client';

import { motion } from 'framer-motion';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useGalleryStore } from '../../lib/store';
import { Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export default function GalleryPage() {
  const images = useGalleryStore((state) => state.getImages());
  const [selectedImage, setSelectedImage] = useState(null);

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
            📸
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            गैलरी | Gallery
          </motion.h1>
          
          <motion.p
            className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sacred moments and divine inspiration captured through time
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {images.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ImageIcon size={80} className="mx-auto mb-6 text-orange-400" />
              <h3 className="text-3xl font-bold text-orange-900 mb-4">
                No Images Yet
              </h3>
              <p className="text-xl text-orange-600">
                Gallery images will appear here once added
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-3xl border-2 border-orange-200 aspect-[4/3] bg-gradient-to-br from-orange-50 to-white shadow-md hover:shadow-xl transition-shadow duration-300">
                    {image.imageUrl ? (
                      <img 
                        src={image.imageUrl} 
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon size={64} className="text-orange-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                        {image.description && (
                          <p className="text-sm text-white/90">{image.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="max-w-5xl w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video bg-orange-50">
                {selectedImage.imageUrl && (
                  <img 
                    src={selectedImage.imageUrl} 
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent mb-4">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="text-lg text-orange-900 leading-relaxed">
                    {selectedImage.description}
                  </p>
                )}
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="mt-6 px-8 py-3 rounded-full font-semibold text-white shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}