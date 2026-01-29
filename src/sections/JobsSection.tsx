// src/sections/JobsSection.tsx
import { motion } from 'framer-motion'
import { MapPin, DollarSign, Clock, ArrowRight, Flame, Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Job } from '../App'

interface JobsSectionProps {
  jobs: Job[]
}

export default function JobsSection({ jobs }: JobsSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Available Positions</h2>
        <span className="text-slate-500">{jobs.length} jobs found</span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={job.id} job={job} index={index} />
        ))}
      </div>
    </section>
  )
}

function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* URGENT Badge - Top Right */}
      {job.urgent && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
            <Flame size={12} /> URGENT
          </span>
        </div>
      )}
      
      {/* REFERRAL BONUS Badge - Top Left */}
      {job.referralBonus && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full shadow-lg">
            <Gift size={12} /> {job.referralBonus}
          </span>
        </div>
      )}

      <Link to={`/job/${job.id}`} className="block p-6 relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
            {job.company[0]}
          </div>
          <div className="flex-1 pt-1">
            <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
              {job.title}
            </h3>
            <p className="text-slate-500 text-sm">{job.company}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold">
            {job.category}
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
            {job.type}
          </span>
        </div>

        <div className="space-y-2 mb-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-slate-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-slate-400" />
            <span className="font-semibold text-green-600">{job.salary}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-slate-400" />
            <span>{job.posted}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-500">
            {job.requirements.length} requirements
          </span>
          <span className="flex items-center gap-1 text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
            Details <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
