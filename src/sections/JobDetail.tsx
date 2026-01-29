import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, DollarSign, Clock, CheckCircle, Send, Gift, Upload, X, Copy, Check } from 'lucide-react'
import type { Job } from '../App'
import { useState } from 'react'

interface JobDetailProps {
  jobs: Job[]
}

export default function JobDetail({ jobs }: JobDetailProps) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showApply, setShowApply] = useState(false)
  const [showRefer, setShowRefer] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const job = jobs.find(j => j.id === Number(id))
  
  if (!job) return <div className="pt-20 text-center">Job not found</div>

  const referralCode = `TRM-JOB-${job.id}-${Date.now().toString().slice(-6)}`

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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

        {/* REFERRAL BONUS BANNER */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-6 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Gift size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Referral Bonus: {job.referralBonus}</h3>
                <p className="text-green-100 text-sm">Refer a friend and earn when they get hired!</p>
              </div>
            </div>
            <button 
              onClick={() => setShowRefer(true)}
              className="px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:shadow-lg transition-shadow"
            >
              Refer Now
            </button>
          </div>
        </div>

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

      {/* APPLY MODAL */}
      {showApply && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowApply(false)}>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Apply for {job.title}</h2>
              <button onClick={() => setShowApply(false)} className="p-2 hover:bg-slate-100 rounded-full">
                <X size={20} />
              </button>
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowApply(false); alert('Application submitted!'); }}>
              <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none" />
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none" />
              <input required type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none" />
              
              {/* FILE UPLOAD */}
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-blue-500 transition-colors">
                <input type="file" id="resume" className="hidden" accept=".pdf,.doc,.docx" />
                <label htmlFor="resume" className="cursor-pointer flex flex-col items-center gap-2">
                  <Upload size={24} className="text-slate-400" />
                  <span className="text-sm text-slate-600">Click to upload Resume/CV (PDF, DOC)</span>
                </label>
              </div>

              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold">Submit Application</button>
            </form>
          </motion.div>
        </div>
      )}

      {/* REFER MODAL */}
      {showRefer && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowRefer(false)}>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Refer a Friend</h2>
              <button onClick={() => setShowRefer(false)} className="p-2 hover:bg-slate-100 rounded-full">
                <X size={20} />
              </button>
            </div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gift size={32} className="text-green-600" />
              </div>
              <p className="text-slate-600">Share this code with your friend. When they get hired, you earn <span className="font-bold text-green-600">{job.referralBonus}</span>!</p>
            </div>
            <div className="bg-slate-100 rounded-xl p-4 mb-4">
              <p className="text-xs text-slate-500 mb-1">Your Referral Code</p>
              <div className="flex items-center justify-between">
                <code className="text-lg font-mono font-bold">{referralCode}</code>
                <button 
                  onClick={copyCode}
                  className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} className="text-slate-600" />}
                </button>
              </div>
            </div>
            <button 
              onClick={() => { copyCode(); setShowRefer(false); }}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold"
            >
              Copy & Share
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
