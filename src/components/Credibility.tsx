'use client'

import { motion } from 'framer-motion'

export default function Credibility() {
  const companies = [
    { name: 'Sequoia Capital', logo: 'SQ' },
    { name: 'Andreessen Horowitz', logo: 'a16z' },
    { name: 'KKR', logo: 'KKR' },
    { name: 'Blackstone', logo: 'BX' },
    { name: 'TPG', logo: 'TPG' },
    { name: 'Carlyle', logo: 'CG' },
    { name: 'Apollo', logo: 'APO' },
    { name: 'Warburg', logo: 'WP' }
  ]

  return (
    <section className="bg-gradient-to-b from-slate-900 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p 
          className="text-gray-400 mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by decision-makers at:
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {companies.map((company) => (
            <motion.div
              key={company.name}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600 hover:border-gray-500 transition-colors">
                <span className="text-white font-bold text-sm">{company.logo}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Companies Profiled</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400">Signal Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$2B+</div>
            <div className="text-gray-400">Deals Analyzed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}