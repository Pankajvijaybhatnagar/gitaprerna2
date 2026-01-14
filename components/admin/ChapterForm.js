'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useChapterStore } from '../../lib/store';
import { X, Save } from 'lucide-react';

export default function ChapterForm({ chapter, onClose }) {
  const addChapter = useChapterStore((state) => state.addChapter);
  const updateChapter = useChapterStore((state) => state.updateChapter);
  
  const [formData, setFormData] = useState({
    titleHindi: '',
    titleEnglish: '',
    verses: '',
    summaryHindi: '',
    summaryEnglish: '',
    keyTeachingsHindi: ['', '', ''],
    keyTeachingsEnglish: ['', '', ''],
    detailedExplanationHindi: '',
    detailedExplanationEnglish: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (chapter) {
      setFormData({
        titleHindi: chapter.titleHindi || '',
        titleEnglish: chapter.titleEnglish || '',
        verses: chapter.verses || '',
        summaryHindi: chapter.summaryHindi || '',
        summaryEnglish: chapter.summaryEnglish || '',
        keyTeachingsHindi: chapter.keyTeachingsHindi || ['', '', ''],
        keyTeachingsEnglish: chapter.keyTeachingsEnglish || ['', '', ''],
        detailedExplanationHindi: chapter.detailedExplanationHindi || '',
        detailedExplanationEnglish: chapter.detailedExplanationEnglish || '',
      });
    }
  }, [chapter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    if (formData[field].length > 1) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index)
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.titleHindi.trim()) newErrors.titleHindi = 'Hindi title is required';
    if (!formData.titleEnglish.trim()) newErrors.titleEnglish = 'English title is required';
    if (!formData.verses || formData.verses <= 0) newErrors.verses = 'Valid number of verses is required';
    if (!formData.summaryHindi.trim()) newErrors.summaryHindi = 'Hindi summary is required';
    if (!formData.summaryEnglish.trim()) newErrors.summaryEnglish = 'English summary is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    const chapterData = {
      ...formData,
      verses: parseInt(formData.verses),
      keyTeachingsHindi: formData.keyTeachingsHindi.filter(t => t.trim()),
      keyTeachingsEnglish: formData.keyTeachingsEnglish.filter(t => t.trim()),
    };

    if (chapter) {
      updateChapter(chapter.id, chapterData);
    } else {
      addChapter(chapterData);
    }

    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <div className="min-h-screen px-6 py-12 flex items-center justify-center">
        <motion.div
          className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#72471c]">
              {chapter ? 'Edit Chapter' : 'Add New Chapter'}
            </h2>
            <motion.button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#f5f1e8]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} className="text-[#72471c]" />
            </motion.button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#72471c] mb-2">
                  Title in Hindi *
                </label>
                <input
                  type="text"
                  name="titleHindi"
                  value={formData.titleHindi}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${errors.titleHindi ? 'border-red-500' : 'border-[#a59069]/30'} focus:border-[#72471c] outline-none transition-colors`}
                  placeholder="अध्याय शीर्षक"
                />
                {errors.titleHindi && (
                  <p className="text-red-500 text-sm mt-1">{errors.titleHindi}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#72471c] mb-2">
                  Title in English *
                </label>
                <input
                  type="text"
                  name="titleEnglish"
                  value={formData.titleEnglish}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${errors.titleEnglish ? 'border-red-500' : 'border-[#a59069]/30'} focus:border-[#72471c] outline-none transition-colors`}
                  placeholder="Chapter Title"
                />
                {errors.titleEnglish && (
                  <p className="text-red-500 text-sm mt-1">{errors.titleEnglish}</p>
                )}
              </div>
            </div>

            {/* Verses */}
            <div>
              <label className="block text-sm font-semibold text-[#72471c] mb-2">
                Number of Verses *
              </label>
              <input
                type="number"
                name="verses"
                value={formData.verses}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 ${errors.verses ? 'border-red-500' : 'border-[#a59069]/30'} focus:border-[#72471c] outline-none transition-colors`}
                placeholder="47"
                min="1"
              />
              {errors.verses && (
                <p className="text-red-500 text-sm mt-1">{errors.verses}</p>
              )}
            </div>

            {/* Summary Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#72471c] mb-2">
                  Summary in Hindi *
                </label>
                <textarea
                  name="summaryHindi"
                  value={formData.summaryHindi}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl border-2 ${errors.summaryHindi ? 'border-red-500' : 'border-[#a59069]/30'} focus:border-[#72471c] outline-none transition-colors resize-none`}
                  placeholder="सारांश हिंदी में..."
                />
                {errors.summaryHindi && (
                  <p className="text-red-500 text-sm mt-1">{errors.summaryHindi}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#72471c] mb-2">
                  Summary in English *
                </label>
                <textarea
                  name="summaryEnglish"
                  value={formData.summaryEnglish}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl border-2 ${errors.summaryEnglish ? 'border-red-500' : 'border-[#a59069]/30'} focus:border-[#72471c] outline-none transition-colors resize-none`}
                  placeholder="Summary in English..."
                />
                {errors.summaryEnglish && (
                  <p className="text-red-500 text-sm mt-1">{errors.summaryEnglish}</p>
                )}
              </div>
            </div>

            {/* Key Teachings Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-[#72471c]">
                    Key Teachings in Hindi
                  </label>
                  <motion.button
                    type="button"
                    onClick={() => addArrayItem('keyTeachingsHindi')}
                    className="text-sm text-[#72471c] hover:text-[#a59069]"
                    whileHover={{ scale: 1.05 }}
                  >
                    + Add
                  </motion.button>
                </div>
                <div className="space-y-3">
                  {formData.keyTeachingsHindi.map((teaching, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={teaching}
                        onChange={(e) => handleArrayChange('keyTeachingsHindi', index, e.target.value)}
                        className="flex-1 px-4 py-2 rounded-xl border-2 border-[#a59069]/30 focus:border-[#72471c] outline-none transition-colors"
                        placeholder={`शिक्षा ${index + 1}`}
                      />
                      {formData.keyTeachingsHindi.length > 1 && (
                        <motion.button
                          type="button"
                          onClick={() => removeArrayItem('keyTeachingsHindi', index)}
                          className="px-3 py-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          ×
                        </motion.button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-[#72471c]">
                    Key Teachings in English
                  </label>
                  <motion.button
                    type="button"
                    onClick={() => addArrayItem('keyTeachingsEnglish')}
                    className="text-sm text-[#72471c] hover:text-[#a59069]"
                    whileHover={{ scale: 1.05 }}
                  >
                    + Add
                  </motion.button>
                </div>
                <div className="space-y-3">
                  {formData.keyTeachingsEnglish.map((teaching, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={teaching}
                        onChange={(e) => handleArrayChange('keyTeachingsEnglish', index, e.target.value)}
                        className="flex-1 px-4 py-2 rounded-xl border-2 border-[#a59069]/30 focus:border-[#72471c] outline-none transition-colors"
                        placeholder={`Teaching ${index + 1}`}
                      />
                      {formData.keyTeachingsEnglish.length > 1 && (
                        <motion.button
                          type="button"
                          onClick={() => removeArrayItem('keyTeachingsEnglish', index)}
                          className="px-3 py-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          ×
                        </motion.button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Explanation Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#72471c] mb-2">
                  Detailed Explanation in Hindi
                </label>
                <textarea
                  name="detailedExplanationHindi"
                  value={formData.detailedExplanationHindi}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#a59069]/30 focus:border-[#72471c] outline-none transition-colors resize-none"
                  placeholder="विस्तृत व्याख्या हिंदी में..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#72471c] mb-2">
                  Detailed Explanation in English
                </label>
                <textarea
                  name="detailedExplanationEnglish"
                  value={formData.detailedExplanationEnglish}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#a59069]/30 focus:border-[#72471c] outline-none transition-colors resize-none"
                  placeholder="Detailed explanation in English..."
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 justify-end pt-4">
              <motion.button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-full font-semibold text-[#72471c] bg-white border-2 border-[#72471c]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
              
              <motion.button
                type="submit"
                className="px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #72471c 0%, #a59069 100%)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Save size={20} />
                {chapter ? 'Update Chapter' : 'Add Chapter'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
