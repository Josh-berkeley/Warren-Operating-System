'use client'

import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: "Private Market Intelligence with 100+ Company Attributes",
      description: "From org structure, leadership churn, GTM motion, tech stack, financials, hiring momentum, IP filings, and customer logos—Warren assembles live company dossiers with comprehensive market positioning.",
      mockup: (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-semibold">Company Profile: TechCorp</h4>
            <span className="text-green-400 text-sm">Live Dossier</span>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-800 rounded p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-white font-medium mb-2">Organization</h5>
                  <div className="text-xs text-gray-400">
                    • 847 employees (+23% YoY)
                    <br />• C-Suite: 15% churn (6mo)
                    <br />• 3 new VP hires this quarter
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">GTM Motion</h5>
                  <div className="text-xs text-gray-400">
                    • PLG → Enterprise shift
                    <br />• 67% self-serve, 33% sales
                    <br />• Avg deal size: $87K (+34%)
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-white font-medium mb-2">Tech Stack</h5>
                  <div className="text-xs text-gray-400">
                    • React, Node.js, PostgreSQL
                    <br />• AWS (increased spend 45%)
                    <br />• 12 new patents filed
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Financials</h5>
                  <div className="text-xs text-gray-400">
                    • $24M ARR (est.)
                    <br />• 127% NRR
                    <br />• Burn rate: $2.1M/mo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      reverse: false
    },
    {
      title: "Trust-Path Discovery & Intent-Based Networking",
      description: "Surface hidden warm paths to executives via co-investors, advisors, alumni networks. Warren catches micro-moments and predictive signals to optimize networking opportunities.",
      mockup: (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2">Trust Path to Sarah Chen (Acme Corp CEO)</h4>
            <div className="bg-gray-800 rounded p-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-xs">1</div>
                  <div className="text-gray-300 text-sm">Co-investor connection via Mark Thompson (Bessemer)</div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-xs">2</div>
                  <div className="text-gray-300 text-sm">Alumni network: Both Stanford GSB &apos;18</div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full mr-3 flex items-center justify-center text-xs">3</div>
                  <div className="text-gray-300 text-sm">Advisor overlap: Dr. Kumar mentored both founders</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-900/30 border border-purple-500/30 rounded">
                <div className="text-purple-400 text-sm font-medium mb-1">🎯 Micro-Moment Alert</div>
                <div className="text-gray-300 text-xs">Sarah posted 3x about &quot;exit readiness&quot; in 10 days → Potential sell-side target</div>
              </div>
            </div>
          </div>
        </div>
      ),
      reverse: true
    },
    {
      title: "Autonomous Due Diligence & Risk Intelligence",
      description: "Warren auto-benchmarks deal assumptions, flags inconsistencies across disclosures, and runs Monte Carlo simulations to quantify confidence levels and macro sensitivity.",
      mockup: (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <div className="mb-4">
            <h4 className="text-white font-semibold">Deal Analysis: CloudTech Series B</h4>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm">Growth Rate Benchmark</span>
                <span className="text-yellow-400 text-sm">↗ 89th percentile</span>
              </div>
              <div className="text-xs text-gray-400">Claimed 45% vs market avg 28%</div>
            </div>
            <div className="bg-gray-800 rounded p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm">Margin Analysis</span>
                <span className="text-red-400 text-sm">⚠ Flag: Volatility</span>
              </div>
              <div className="text-xs text-gray-400">67% margin (Q3) vs 45% (Q1) - investigate</div>
            </div>
            <div className="bg-gray-800 rounded p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm">Monte Carlo IRR</span>
                <span className="text-green-400 text-sm">70% confidence: 15-35%</span>
              </div>
              <div className="text-xs text-gray-400">Base case 25%, 60% paths {'>'}20% IRR</div>
            </div>
            <div className="bg-purple-900/30 border border-purple-500/30 rounded p-3">
              <div className="text-purple-400 text-sm font-medium mb-1">🧠 Risk Alert</div>
              <div className="text-gray-300 text-xs">75% SMB exposure + retail slowdown = 18% revenue risk</div>
            </div>
          </div>
        </div>
      ),
      reverse: false
    }
  ]

  return (
    <section className="bg-gradient-to-b from-gray-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 mb-32 last:mb-0`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                <span 
                  className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                  dangerouslySetInnerHTML={{ 
                    __html: feature.title.replace(/\*\*(.*?)\*\*/g, '$1')
                  }}
                />
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {feature.description}
              </p>
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Mockup */}
            <div className="flex-1 w-full max-w-2xl">
              <motion.div
                className="transform perspective-1000 hover:rotate-y-6 transition-transform duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {feature.mockup}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}