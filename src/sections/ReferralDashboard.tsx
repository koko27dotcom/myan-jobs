import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users, DollarSign, Copy, Share2, TrendingUp } from 'lucide-react'

export default function ReferralDashboard() {
  const [copied, setCopied] = useState(false)
  const referralCode = 'TRM-KOKO-2024'

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">My Referral Hub</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: DollarSign, label: 'Earnings', value: '120K MMK', color: 'from-green-500 to-emerald-600' },
            { icon: Users, label: 'Referrals', value: '12', color: 'from-blue-500 to-cyan-600' },
            { icon: TrendingUp, label: 'Pending', value: '45K MMK', color: 'from-purple-500 to-pink-600' },
            { icon: Trophy, label: 'Rank', value: '#42', color: 'from-orange-500 to-red-600' },
          ].map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-2xl p-4 shadow-lg">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-3`}>
                <stat.icon size={20} />
              </div>
              <p className="text-slate-500 text-xs">{stat.label}</p>
              <p className="text-lg font-bold text-slate-800">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Your Referral Code</h2>
          <p className="text-slate-300 mb-6">Share with friends and earn when they get hired</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 font-mono text-2xl text-center border border-white/20">
              {referralCode}
            </div>
            <button onClick={copyCode} className="px-6 py-4 bg-white text-slate-900 rounded-xl font-semibold flex items-center justify-center gap-2">
              <Copy size={20} /> {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-bold text-slate-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { name: 'Aung Kyaw', job: 'Senior Supervisor', status: 'hired', reward: 50000 },
              { name: 'Mya Mya', job: 'Interior Designer', status: 'interview', reward: 0 },
            ].map((ref, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {ref.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{ref.name}</p>
                    <p className="text-sm text-slate-500">{ref.job}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${ref.status === 'hired' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {ref.status === 'hired' ? 'Hired 🎉' : 'Interview'}
                  </span>
                  {ref.reward > 0 && <p className="text-green-600 font-bold text-sm mt-1">+{ref.reward.toLocaleString()} MMK</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
