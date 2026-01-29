import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, DollarSign, Clock, CheckCircle, Send } from 'lucide-react'
import type { Job } from '../App'
import { useState } from 'react'

interface JobDetailProps {
  jobs: Job[]
}

export default function JobDetail({ jobs }: JobDetailProps) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showApply, setShowApply] = useState(false)
  
  const job = jobs.find(j => j.id === Number(id))
  
  if (!job) return <div className="pt-20 text-center">Job not found</div>

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 mb-6 hover:text-blue-600">
          <ArrowLeft size={20} /> Back
        </button>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
              {job.company[0]}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{job.title}</h1>
              <p className="text-lg text-slate-600 mb-4">{job.company}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                <span className="flex items-center gap-1"><DollarSign size={16} className="text-green-600" /> <span className="font-semibold text-green-600">{job.salary}</span></span>
                <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
              </div>
            </div>
            <button onClick={() => setShowApply(true)} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2">
              <Send size={18} /> Apply Now
            </button>
          </div>
        </div>

        {job.referralBonus && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">💰 Referral Bonus: {job.referralBonus}</h3>
                <p className="text-green-100 text-sm">Refer a friend and earn when they get hired</p>
              </div>
              <button className="px-4 py-2 bg-white text-green-600 rounded-lg font-semibold text-sm">Refer Now</button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Description</h2>
              <p className="text-slate-600 leading-relaxed">{job.description}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h3 className="font-bold text-slate-800 mb-4">Benefits</h3>
            <ul className="space-y-3">
              {job.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showApply && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowApply(false)}>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Apply for {job.title}</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowApply(false); alert('Application submitted!'); }}>
              <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-200" />
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-slate-200" />
              <input required type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-slate-200" />
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold">Submit Application</button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
