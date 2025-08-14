'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function BetaSignup() {
  const [formData, setFormData] = useState({
    email: '',
    linkedin: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Thank you!</h2>
              <p className="text-gray-300 text-lg">
                We will get back to you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">Join Waitlist</h1>
              <p className="text-gray-300">
                Help us build the future of AI-powered professional networking
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  required
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Join Beta Waitlist
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                We will get back to you!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}