'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/20 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The AI-Native{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Operating System
            </span>
            {" "}for Private Markets
          </h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Warren organizes the world's private market information into a reasoning infrastructure for financial discovery, diligence, competitive intelligence and decision‑making
        </motion.p>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="/beta-signup" className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg px-10 py-4 rounded-full hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105 inline-block">
            Join Waitlist
          </a>
        </motion.div>

        {/* Product Mockup */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Browser window frame */}
            <div className="bg-gray-800 rounded-t-xl border border-gray-700 shadow-2xl transform perspective-1000 rotate-x-12 hover:rotate-x-8 transition-transform duration-500">
              {/* Browser chrome */}
              <div className="flex items-center px-4 py-3 bg-gray-800 rounded-t-xl border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-700 rounded-md px-4 py-1 text-sm text-gray-300 text-center">
                    warren.ai/dashboard
                  </div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="bg-gray-900 p-6 rounded-b-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Target Discovery */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-3">Target Discovery</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-700 rounded p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">CloudSecure Inc</span>
                          <span className="text-green-400 text-xs">94% fit</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Series B, €15M raised, 67% growth</div>
                      </div>
                      <div className="bg-gray-700 rounded p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">DataFlow Labs</span>
                          <span className="text-yellow-400 text-xs">89% fit</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Early stage, AI compliance, {'<'}$10M</div>
                      </div>
                    </div>
                  </div>

                  {/* Market Intelligence */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-3">Market Signals</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-xs">🔥</div>
                        <div>
                          <div className="text-gray-300 text-sm">TechCorp hiring surge</div>
                          <div className="text-xs text-gray-400">+45% eng roles, 2 weeks</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs">📈</div>
                        <div>
                          <div className="text-gray-300 text-sm">Series A activity up 23%</div>
                          <div className="text-xs text-green-400">EU vertical SaaS</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deal Analytics */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-3">Portfolio Insights</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Active Deals</span>
                        <span className="text-green-400 text-sm">12 tracked</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Risk Alerts</span>
                        <span className="text-yellow-400 text-sm">3 flagged</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 text-sm">Expert Validations</span>
                        <span className="text-purple-400 text-sm">7 pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}