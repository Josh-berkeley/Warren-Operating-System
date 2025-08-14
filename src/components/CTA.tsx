'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-900/30 to-slate-900"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to experience{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Warren?
            </span>
          </h2>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join the future of private market intelligence. Built for investors, acquirers, advisors, and analysts.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="mailto:josh_singh@berkeley.edu,shivam.dixit@berkeley.edu" className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl px-12 py-5 rounded-full hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl inline-block">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}