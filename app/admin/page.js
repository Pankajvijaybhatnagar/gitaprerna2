'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useChapterStore, useAuthStore, useGalleryStore, useVideoStore, useDonationStore } from '../../lib/store';
import { Plus, Edit2, Trash2, BookOpen, AlertCircle, LogOut, Image, Video, DollarSign, Settings } from 'lucide-react';
import ChapterForm from '../../components/admin/ChapterForm';

export default function AdminPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('chapters');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingChapter, setEditingChapter] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [mounted, setMounted] = useState(false);
  
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const chapters = useChapterStore((state) => state.getChapters());
  const deleteChapter = useChapterStore((state) => state.deleteChapter);
  const resetChapters = useChapterStore((state) => state.resetChapters);

  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, router]);

  if (!mounted || !isAuthenticated) {
    return null;
  }

  const handleEdit = (chapter) => {
    setEditingChapter(chapter);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    deleteChapter(id);
    setDeleteConfirm(null);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingChapter(null);
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const tabs = [
    { id: 'chapters', label: 'Chapters', icon: <BookOpen size={20} /> },
    { id: 'gallery', label: 'Gallery', icon: <Image size={20} /> },
    { id: 'videos', label: 'Videos', icon: <Video size={20} /> },
    { id: 'donation', label: 'Donation', icon: <DollarSign size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-600 via-red-500 to-red-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <motion.div
                className="text-6xl mb-6 text-orange-100"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
              >
                ⚙️
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Admin Panel
              </motion.h1>
              
              <motion.p
                className="text-xl text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Manage all content for Gita Prerna
              </motion.p>
            </div>

            <motion.button
              onClick={handleLogout}
              className="px-6 py-3 rounded-full bg-white text-orange-600 font-semibold flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut size={20} />
              Logout
            </motion.button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-6 bg-orange-50 border-b-2 border-orange-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 whitespace-nowrap shadow-md ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-600 to-red-900 text-white'
                    : 'bg-white text-orange-900 border-2 border-orange-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'chapters' && (
            <ChaptersTab
              chapters={chapters}
              onEdit={handleEdit}
              onDelete={setDeleteConfirm}
              onAdd={() => setIsFormOpen(true)}
              onReset={() => {
                if (confirm('Reset all chapters to default?')) {
                  resetChapters();
                }
              }}
            />
          )}
          {activeTab === 'gallery' && <GalleryTab />}
          {activeTab === 'videos' && <VideosTab />}
          {activeTab === 'donation' && <DonationTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </section>

      {/* Chapter Form Modal */}
      {isFormOpen && (
        <ChapterForm
          chapter={editingChapter}
          onClose={handleCloseForm}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setDeleteConfirm(null)}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <AlertCircle size={64} className="mx-auto mb-4 text-red-900" />
              <h3 className="text-2xl font-bold text-orange-900 mb-4">
                Delete Chapter?
              </h3>
              <p className="text-lg text-orange-600 mb-8">
                Are you sure you want to delete this chapter? This action cannot be undone.
              </p>
              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={() => setDeleteConfirm(null)}
                  className="px-6 py-3 rounded-full font-semibold text-orange-900 bg-white border-2 border-orange-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-red-900 to-red-700 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Delete
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

// Chapters Tab Component
function ChaptersTab({ chapters, onEdit, onDelete, onAdd, onReset }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent">
          Manage Chapters
        </h2>
        <div className="flex gap-4">
          <motion.button
            onClick={onReset}
            className="px-6 py-3 rounded-full font-semibold text-orange-900 bg-white border-2 border-orange-600 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset to Default
          </motion.button>
          <motion.button
            onClick={onAdd}
            className="px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={20} />
            Add Chapter
          </motion.button>
        </div>
      </div>

      {chapters.length === 0 ? (
        <div className="text-center py-20">
          <BookOpen size={64} className="mx-auto mb-6 text-orange-400" />
          <h3 className="text-3xl font-bold text-orange-900 mb-4">
            No Chapters Available
          </h3>
          <p className="text-xl text-orange-600">
            Start by adding a new chapter
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {chapters.map((chapter) => (
            <motion.div
              key={chapter.id}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-200 shadow-md"
              whileHover={{ borderColor: '#ea580c', shadow: 'lg' }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent">
                      {chapter.id}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900">
                        {chapter.titleHindi}
                      </h3>
                      <h4 className="text-lg text-orange-600">
                        {chapter.titleEnglish}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-orange-900/70 line-clamp-2">
                    {chapter.summaryEnglish}
                  </p>
                  <div className="mt-2 text-sm font-semibold text-orange-600">
                    {chapter.verses} Verses
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link href={`/chapter/${chapter.id}`}>
                    <motion.button
                      className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold text-sm shadow-md"
                      whileHover={{ scale: 1.05, backgroundColor: '#ea580c' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View
                    </motion.button>
                  </Link>
                  
                  <motion.button
                    onClick={() => onEdit(chapter)}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-red-900 text-white font-semibold text-sm flex items-center gap-2 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Edit2 size={16} />
                    Edit
                  </motion.button>
                  
                  <motion.button
                    onClick={() => onDelete(chapter.id)}
                    className="px-4 py-2 rounded-full bg-red-900 text-white font-semibold text-sm flex items-center gap-2 shadow-md"
                    whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Trash2 size={16} />
                    Delete
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

// Gallery Tab Component
function GalleryTab() {
  const [isAdding, setIsAdding] = useState(false);
  const images = useGalleryStore((state) => state.getImages());
  const addImage = useGalleryStore((state) => state.addImage);
  const deleteImage = useGalleryStore((state) => state.deleteImage);

  const [newImage, setNewImage] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });

  const handleAddImage = () => {
    if (newImage.title && newImage.imageUrl) {
      addImage(newImage);
      setNewImage({ title: '', description: '', imageUrl: '' });
      setIsAdding(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent">
          Manage Gallery
        </h2>
        <motion.button
          onClick={() => setIsAdding(true)}
          className="px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus size={20} />
          Add Image
        </motion.button>
      </div>

      {isAdding && (
        <motion.div
          className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-200 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold text-orange-900 mb-4">Add New Image</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Image Title"
              value={newImage.title}
              onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
            />
            <textarea
              placeholder="Description"
              value={newImage.description}
              onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
              rows="3"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newImage.imageUrl}
              onChange={(e) => setNewImage({ ...newImage, imageUrl: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
            />
            <div className="flex gap-4">
              <motion.button
                onClick={handleAddImage}
                className="px-6 py-3 rounded-full font-semibold text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add Image
              </motion.button>
              <motion.button
                onClick={() => setIsAdding(false)}
                className="px-6 py-3 rounded-full font-semibold text-orange-900 border-2 border-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="bg-white rounded-2xl overflow-hidden border-2 border-orange-200 shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-video bg-orange-50 flex items-center justify-center">
              {image.imageUrl ? (
                <img src={image.imageUrl} alt={image.title} className="w-full h-full object-cover" />
              ) : (
                <Image size={48} className="text-orange-400" />
              )}
            </div>
            <div className="p-4">
              <h4 className="font-bold text-orange-900 mb-2">{image.title}</h4>
              <p className="text-sm text-orange-600 mb-4">{image.description}</p>
              <motion.button
                onClick={() => deleteImage(image.id)}
                className="w-full px-4 py-2 rounded-full bg-red-900 text-white font-semibold text-sm shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delete
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Videos Tab Component  
function VideosTab() {
  const [isAdding, setIsAdding] = useState(false);
  const videos = useVideoStore((state) => state.getVideos());
  const addVideo = useVideoStore((state) => state.addVideo);
  const deleteVideo = useVideoStore((state) => state.deleteVideo);

  const [newVideo, setNewVideo] = useState({
    title: '',
    description: '',
    youtubeUrl: ''
  });

  const handleAddVideo = () => {
    if (newVideo.title && newVideo.youtubeUrl) {
      addVideo(newVideo);
      setNewVideo({ title: '', description: '', youtubeUrl: '' });
      setIsAdding(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent">
          Manage Videos
        </h2>
        <motion.button
          onClick={() => setIsAdding(true)}
          className="px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus size={20} />
          Add Video
        </motion.button>
      </div>

      {isAdding && (
        <motion.div
          className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-200 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold text-orange-900 mb-4">Add New Video</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Video Title"
              value={newVideo.title}
              onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
            />
            <textarea
              placeholder="Description"
              value={newVideo.description}
              onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
              rows="3"
            />
            <input
              type="text"
              placeholder="YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)"
              value={newVideo.youtubeUrl}
              onChange={(e) => setNewVideo({ ...newVideo, youtubeUrl: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
            />
            <div className="flex gap-4">
              <motion.button
                onClick={handleAddVideo}
                className="px-6 py-3 rounded-full font-semibold text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add Video
              </motion.button>
              <motion.button
                onClick={() => setIsAdding(false)}
                className="px-6 py-3 rounded-full font-semibold text-orange-900 border-2 border-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-200 shadow-md"
            whileHover={{ borderColor: '#ea580c' }}
          >
            <h4 className="font-bold text-orange-900 mb-2">{video.title}</h4>
            <p className="text-sm text-orange-600 mb-4">{video.description}</p>
            <div className="mb-4 text-sm font-mono text-orange-900 bg-white p-2 rounded break-all border border-orange-200">
              {video.youtubeUrl}
            </div>
            <motion.button
              onClick={() => deleteVideo(video.id)}
              className="w-full px-4 py-2 rounded-full bg-red-900 text-white font-semibold shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Delete
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Donation Tab Component
function DonationTab() {
  const donationInfo = useDonationStore((state) => state.getDonationInfo());
  const updateDonationInfo = useDonationStore((state) => state.updateDonationInfo);
  const [formData, setFormData] = useState(donationInfo);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateDonationInfo(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent mb-2">
          Donation Settings
        </h2>
        <p className="text-orange-600">Configure payment information for donations</p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 shadow-md">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-orange-900 mb-2">
              UPI ID
            </label>
            <input
              type="text"
              value={formData.upiId}
              onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
              placeholder="yourname@upi"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-orange-900 mb-2">
                Account Number
              </label>
              <input
                type="text"
                value={formData.accountNumber}
                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
                placeholder="1234567890"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-orange-900 mb-2">
                IFSC Code
              </label>
              <input
                type="text"
                value={formData.ifscCode}
                onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
                placeholder="ABCD0123456"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-orange-900 mb-2">
                Bank Name
              </label>
              <input
                type="text"
                value={formData.bankName}
                onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
                placeholder="Bank Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-orange-900 mb-2">
                Account Holder Name
              </label>
              <input
                type="text"
                value={formData.accountHolder}
                onChange={(e) => setFormData({ ...formData, accountHolder: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-orange-900 mb-2">
              Donation Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
              rows="4"
              placeholder="Message to show on donation page"
            />
          </div>

          <div className="flex gap-4">
            <motion.button
              onClick={handleSave}
              className="px-8 py-4 rounded-full font-semibold text-white shadow-lg"
              style={{
                background: saved ? '#22c55e' : 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {saved ? '✓ Saved!' : 'Save Settings'}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Settings Tab Component
function SettingsTab() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const updateCredentials = useAuthStore((state) => state.updateCredentials);

  const handleUpdateCredentials = () => {
    setError('');
    setSuccess(false);

    if (!newUsername || !newPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    updateCredentials(newUsername, newPassword);
    setSuccess(true);
    setNewUsername('');
    setNewPassword('');
    setConfirmPassword('');
    
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-900 bg-clip-text text-transparent mb-2">
          Admin Settings
        </h2>
        <p className="text-orange-600">Update your admin credentials</p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 max-w-2xl shadow-md">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-900">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-600">
            Credentials updated successfully!
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-orange-900 mb-2">
              New Username
            </label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
              placeholder="Enter new username"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-orange-900 mb-2">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-orange-900 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none"
              placeholder="Confirm new password"
            />
          </div>

          <motion.button
            onClick={handleUpdateCredentials}
            className="px-8 py-4 rounded-full font-semibold text-white shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Update Credentials
          </motion.button>
        </div>
      </div>
    </div>
  );
}