// src/App.tsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './sections/Navigation'
import HeroSection from './sections/HeroSection'
import JobsSection from './sections/JobsSection'
import JobDetail from './sections/JobDetail'
import ReferralDashboard from './sections/ReferralDashboard'
import MobileNav from './components/MobileNav'

export interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  posted: string
  urgent: boolean
  category: string
  description: string
  requirements: string[]
  benefits: string[]
  referralBonus?: string
}

// Your existing jobs data - keep exactly as is, just add referralBonus to some
const jobsData: Job[] = [
  {
    id: 1,
    title: "Senior Supervisor",
    company: "RK Yangon Steel",
    location: "Thanlyin",
    type: "Full-time",
    salary: "7.5 - 10 Lakhs",
    posted: "Urgent",
    urgent: true,
    category: "Operations",
    description: "Lead and supervise daily operations at steel manufacturing facility",
    requirements: ["5+ years experience", "Leadership skills", "Steel industry knowledge"],
    benefits: ["Health insurance", "Performance bonus", "Transportation"],
    referralBonus: "50,000 MMK"  // Added this
  },
  // ... keep all your other 24 jobs exactly the same ...
  // Just add referralBonus to some of them
  {
    id: 25,
    title: "Accountant",
    company: "GK International Company",
    location: "Kamaryut",
    type: "Full-time",
    salary: "6.5 - 8 Lakhs",
    posted: "5 days ago",
    urgent: false,
    category: "Accounting",
    description: "Full accounting responsibilities for international company",
    requirements: ["5+ years accounting", "International experience", "English proficiency"],
    benefits: ["International exposure", "Competitive salary", "Professional growth"],
    referralBonus: "80,000 MMK"  // Added this
  }
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(jobsData.map(job => job.category)))]

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection 
                totalJobs={jobsData.length} 
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              <JobsSection jobs={filteredJobs} />
            </>
          } />
          <Route path="/job/:id" element={<JobDetail jobs={jobsData} />} />
          <Route path="/referrals" element={<ReferralDashboard />} />
        </Routes>

        <MobileNav />
      </div>
    </Router>
  )
}

export default App
