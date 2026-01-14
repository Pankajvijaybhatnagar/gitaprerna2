'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../lib/store';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';

export default function AdminLoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = login(formData.username, formData.password);
    
    if (success) {
      router.push('/admin');
    } else {
      setError('Invalid username or password');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#f5f1e8] via-white to-[#f5f1e8]">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#a59069]/20">
            {/* Icon */}
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#72471c] to-[#a59069] flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Lock size={36} className="text-white" />
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-2 text-[#72471c]">
              Admin Login
            </h1>
            <p className="text-center text-[#a59069] mb-8">
              Enter your credentials to access admin panel
            </p>

            {/* Error Message */}
            {error && (
              <motion.div
                className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-600 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-[#72471c] mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a59069]" size={20} />
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#a59069]/30 focus:border-[#72471c] outline-none transition-colors"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-[#72471c] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a59069]" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-[#a59069]/30 focus:border-[#72471c] outline-none transition-colors"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#a59069] hover:text-[#72471c]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-full text-white font-semibold text-lg disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, #72471c 0%, #a59069 100%)',
                }}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Logging in...
                  </div>
                ) : (
                  'Login'
                )}
              </motion.button>
            </form>

            {/* Default Credentials Info */}
            <motion.div
              className="mt-8 p-4 bg-[#f5f1e8] rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-[#72471c] font-semibold mb-2">Default Credentials:</p>
              <p className="text-sm text-[#a59069]">Username: <code className="font-mono bg-white px-2 py-1 rounded">admin</code></p>
              <p className="text-sm text-[#a59069]">Password: <code className="font-mono bg-white px-2 py-1 rounded">admin123</code></p>
              <p className="text-xs text-[#a59069] mt-2">You can change these in admin panel</p>
            </motion.div>
          </div>

          {/* Back Link */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => router.push('/')}
              className="text-[#72471c] hover:text-[#a59069] font-medium"
            >
              ← Back to Home
            </button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
