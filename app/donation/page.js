'use client';

import { motion } from 'framer-motion';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useDonationStore } from '../../lib/store';
import { Heart, Copy, CheckCircle, CreditCard, Building } from 'lucide-react';
import { useState } from 'react';

export default function DonationPage() {
  const donationInfo = useDonationStore((state) => state.getDonationInfo());
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
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
            className="text-7xl mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-orange-100"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🙏
            </motion.span>
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            दान | Donation
          </motion.h1>
          
          <motion.p
            className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {donationInfo.message}
          </motion.p>
        </div>
      </section>

      {/* Donation Info Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* UPI Section */}
          {donationInfo.upiId && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border-2 border-orange-200 shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-red-900 flex items-center justify-center shadow-lg">
                    <CreditCard size={32} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-orange-900">UPI Payment</h2>
                    <p className="text-orange-600">Quick and secure payment</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border-2 border-orange-200">
                  <label className="block text-sm font-semibold text-orange-900 mb-2">
                    UPI ID
                  </label>
                  <div className="flex items-center gap-3">
                    <code className="flex-1 text-xl font-mono text-orange-900 bg-orange-50 p-4 rounded-xl">
                      {donationInfo.upiId}
                    </code>
                    <motion.button
                      onClick={() => copyToClipboard(donationInfo.upiId, 'upi')}
                      className="px-6 py-4 rounded-xl font-semibold text-white flex items-center gap-2 shadow-lg"
                      style={{
                        background: copied === 'upi' ? '#22c55e' : 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #DC2626 100%)',
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copied === 'upi' ? (
                        <>
                          <CheckCircle size={20} />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={20} />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bank Details Section */}
          {(donationInfo.accountNumber || donationInfo.ifscCode) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border-2 border-orange-200 shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-red-900 flex items-center justify-center shadow-lg">
                    <Building size={32} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-orange-900">Bank Transfer</h2>
                    <p className="text-orange-600">Direct bank account details</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Account Number */}
                  {donationInfo.accountNumber && (
                    <div className="bg-white p-6 rounded-2xl border-2 border-orange-200">
                      <label className="block text-sm font-semibold text-orange-900 mb-2">
                        Account Number
                      </label>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 text-lg font-mono text-orange-900 bg-orange-50 p-3 rounded-xl">
                          {donationInfo.accountNumber}
                        </code>
                        <motion.button
                          onClick={() => copyToClipboard(donationInfo.accountNumber, 'account')}
                          className="p-3 rounded-xl text-orange-900 hover:bg-orange-50"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {copied === 'account' ? <CheckCircle size={20} className="text-green-600" /> : <Copy size={20} />}
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {/* IFSC Code */}
                  {donationInfo.ifscCode && (
                    <div className="bg-white p-6 rounded-2xl border-2 border-orange-200">
                      <label className="block text-sm font-semibold text-orange-900 mb-2">
                        IFSC Code
                      </label>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 text-lg font-mono text-orange-900 bg-orange-50 p-3 rounded-xl">
                          {donationInfo.ifscCode}
                        </code>
                        <motion.button
                          onClick={() => copyToClipboard(donationInfo.ifscCode, 'ifsc')}
                          className="p-3 rounded-xl text-orange-900 hover:bg-orange-50"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {copied === 'ifsc' ? <CheckCircle size={20} className="text-green-600" /> : <Copy size={20} />}
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {/* Bank Name */}
                  {donationInfo.bankName && (
                    <div className="bg-white p-6 rounded-2xl border-2 border-orange-200">
                      <label className="block text-sm font-semibold text-orange-900 mb-2">
                        Bank Name
                      </label>
                      <div className="text-lg text-orange-900 bg-orange-50 p-3 rounded-xl">
                        {donationInfo.bankName}
                      </div>
                    </div>
                  )}

                  {/* Account Holder */}
                  {donationInfo.accountHolder && (
                    <div className="bg-white p-6 rounded-2xl border-2 border-orange-200">
                      <label className="block text-sm font-semibold text-orange-900 mb-2">
                        Account Holder Name
                      </label>
                      <div className="text-lg text-orange-900 bg-orange-50 p-3 rounded-xl">
                        {donationInfo.accountHolder}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* No payment info message */}
          {!donationInfo.upiId && !donationInfo.accountNumber && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Heart size={80} className="mx-auto mb-6 text-orange-400" />
              <h3 className="text-3xl font-bold text-orange-900 mb-4">
                Payment Details Coming Soon
              </h3>
              <p className="text-xl text-orange-600">
                Donation information will be available shortly
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Gratitude Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-600 via-red-500 to-red-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-7xl mb-8 text-orange-100">ॐ</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              धन्यवाद | Thank You
            </h2>
            <p className="text-2xl text-white/90 leading-relaxed">
              Your contribution helps us spread the timeless wisdom of the Bhagavad Gita
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}