import { motion } from 'framer-motion'
import { Briefcase, Users, TrendingUp, Sparkles } from 'lucide-react'

interface HeroSectionProps {
  totalJobs: number
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export default function HeroSection({ totalJobs, categories, selectedCategory, setSelectedCategory }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-6">
          <Sparkles size={16} className="text-yellow-400" />
          <span className="text-sm font-medium">Myanmar's First Referral Job Platform</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Get Hired Through{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            People You Trust
          </span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Briefcase size={24} className="text-blue-400" />
              <span className="text-3xl font-bold">{totalJobs}</span>
            </div>
            <p className="text-slate-400 text-sm">Active Jobs</p>
          </div>
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users size={24} className="text-blue-400" />
              <span className="text-3xl font-bold">10K+</span>
            </div>
            <p className="text-slate-400 text-sm">Job Seekers</p>
          </div>
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-1">
              <TrendingUp size={24} className="text-blue-400" />
              <span className="text-3xl font-bold">45M+</span>
            </div>
            <p className="text-slate-400 text-sm">MMK Rewards</p>
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === category ? 'bg-white text-slate-900 shadow-lg' : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'}`}>
              {category}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
