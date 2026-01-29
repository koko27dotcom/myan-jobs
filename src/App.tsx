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

const jobsData: Job[] = [
  { id: 1, title: "Senior Supervisor", company: "RK Yangon Steel", location: "Thanlyin", type: "Full-time", salary: "7.5 - 10 Lakhs", posted: "Urgent", urgent: true, category: "Operations", description: "Lead daily operations", requirements: ["5+ years exp", "Leadership"], benefits: ["Health insurance", "Bonus"], referralBonus: "50,000 MMK" },
  { id: 2, title: "Warehouse Supervisor", company: "Universal Energy", location: "Thingangyun", type: "Full-time", salary: "Negotiable", posted: "Urgent", urgent: true, category: "Operations", description: "Manage warehouse", requirements: ["3+ years exp"], benefits: ["Competitive salary"] },
  { id: 3, title: "Interior Designer", company: "Delight Amatat", location: "Thingangyun", type: "Full-time", salary: "10 - 15 Lakhs", posted: "Urgent", urgent: true, category: "Design", description: "Create designs", requirements: ["Design degree"], benefits: ["High commission"], referralBonus: "75,000 MMK" },
  { id: 4, title: "Senior Page Admin", company: "TOMO", location: "Tamwe", type: "Full-time", salary: "Negotiable", posted: "Urgent", urgent: true, category: "Marketing", description: "Social media", requirements: ["3+ years"], benefits: ["Startup equity"] },
  { id: 5, title: "Assistant Brand Manager", company: "Unicharm Myanmar", location: "Yankin", type: "Full-time", salary: "15 - 17 Lakhs", posted: "2 days ago", urgent: false, category: "Marketing", description: "Brand growth", requirements: ["5+ years"], benefits: ["MNC experience"], referralBonus: "100,000 MMK" },
  { id: 6, title: "Brand Executive", company: "Unicharm Myanmar", location: "Yankin", type: "Full-time", salary: "7 - 9 Lakhs", posted: "2 days ago", urgent: false, category: "Marketing", description: "Marketing", requirements: ["2+ years"], benefits: ["MNC environment"] },
  { id: 7, title: "Accountant", company: "Universal Energy", location: "Thingangyun", type: "Full-time", salary: "6 - 7 Lakhs", posted: "3 days ago", urgent: false, category: "Accounting", description: "Accounting", requirements: ["3+ years"], benefits: ["Stable company"] },
  { id: 8, title: "Junior Accountant", company: "Unicharm Myanmar", location: "Yankin", type: "Full-time", salary: "3.5 - 4 Lakhs", posted: "3 days ago", urgent: false, category: "Accounting", description: "Junior accounting", requirements: ["Fresh grad"], benefits: ["Training"] },
  { id: 9, title: "Graphic Designer", company: "WOW Sport", location: "Kamaryut", type: "Full-time", salary: "Around 10 Lakhs", posted: "1 week ago", urgent: false, category: "Design", description: "Graphic design", requirements: ["Portfolio"], benefits: ["Gym membership"] },
  { id: 10, title: "Senior Sales Executive", company: "WOW Sport", location: "Kamaryut", type: "Full-time", salary: "10 Lakhs + Commission", posted: "1 week ago", urgent: false, category: "Sales", description: "Sales", requirements: ["5+ years"], benefits: ["High commission"], referralBonus: "60,000 MMK" },
  { id: 11, title: "Content Writer", company: "Shwe Taung Htun", location: "Mingalar Taung Nyunt", type: "Full-time", salary: "4 - 6 Lakhs", posted: "2 days ago", urgent: false, category: "Marketing", description: "Content", requirements: ["Writing skills"], benefits: ["Flexible hours"] },
  { id: 12, title: "Site Engineer", company: "Sun Myat Tun", location: "Botahtaung", type: "Full-time", salary: "7.5 Lakhs", posted: "4 days ago", urgent: false, category: "Engineering", description: "Engineering", requirements: ["Engineering degree"], benefits: ["Project bonuses"], referralBonus: "55,000 MMK" },
  { id: 13, title: "Data Collector", company: "NielsenIQ", location: "Multiple", type: "Full-time", salary: "3.5 Lakhs", posted: "5 days ago", urgent: false, category: "Research", description: "Data collection", requirements: ["Travel"], benefits: ["Allowances"] },
  { id: 14, title: "Loan Officer", company: "Real Aid", location: "Ayeyarwady", type: "Full-time", salary: "4 - 5 Lakhs", posted: "1 week ago", urgent: false, category: "Finance", description: "Loans", requirements: ["Finance bg"], benefits: ["Incentives"] },
  { id: 15, title: "Cashier", company: "Real Aid", location: "Ayeyarwady", type: "Full-time", salary: "Above 3 Lakhs", posted: "1 week ago", urgent: false, category: "Finance", description: "Cashier", requirements: ["Math skills"], benefits: ["Stable job"] },
  { id: 16, title: "Sales Representative", company: "AMI", location: "Kamaryut", type: "Full-time", salary: "5 - 6.5 Lakhs", posted: "6 days ago", urgent: false, category: "Sales", description: "Sales", requirements: ["Sales exp"], benefits: ["Bonus"] },
  { id: 17, title: "Receptionist", company: "Myanmar IT", location: "Insein", type: "Full-time", salary: "3 - 4 Lakhs", posted: "3 days ago", urgent: false, category: "Admin", description: "Reception", requirements: ["Communication"], benefits: ["IT exposure"] },
  { id: 18, title: "Assistant Accountant", company: "KBZ Insurance", location: "Bahan", type: "Full-time", salary: "4 - 5 Lakhs", posted: "4 days ago", urgent: false, category: "Accounting", description: "Accounting", requirements: ["Accounting degree"], benefits: ["Insurance benefits"] },
  { id: 19, title: "Online Sales", company: "Salpyar", location: "North Dagon", type: "Full-time", salary: "2.4 Lakhs", posted: "5 days ago", urgent: false, category: "Sales", description: "Online sales", requirements: ["Social media"], benefits: ["Commission"] },
  { id: 20, title: "Agency Sales", company: "AMI", location: "Kamaryut", type: "Full-time", salary: "5 - 6.5 Lakhs", posted: "6 days ago", urgent: false, category: "Sales", description: "Agency sales", requirements: ["Experience"], benefits: ["Performance bonus"] },
  { id: 21, title: "Admin Supervisor", company: "TOMO", location: "South Dagon", type: "Full-time", salary: "5 - 6 Lakhs", posted: "1 week ago", urgent: false, category: "Admin", description: "Admin", requirements: ["Supervision"], benefits: ["Startup"] },
  { id: 22, title: "IT Supervisor", company: "Wave Plus", location: "Mingalardon", type: "Full-time", salary: "6 Lakhs", posted: "4 days ago", urgent: false, category: "IT", description: "IT management", requirements: ["IT degree"], benefits: ["Certification"], referralBonus: "70,000 MMK" },
  { id: 23, title: "Sales Staff", company: "Yangoods", location: "Pyin Oo Lwin", type: "Full-time", salary: "2.04 Lakhs", posted: "2 weeks ago", urgent: false, category: "Sales", description: "Retail sales", requirements: ["Sales interest"], benefits: ["Commission"] },
  { id: 24, title: "Junior Page Admin", company: "TOMO", location: "Tamwe", type: "Full-time", salary: "3 - 3.5 Lakhs", posted: "1 week ago", urgent: false, category: "Marketing", description: "Junior admin", requirements: ["Social media"], benefits: ["Learning"] },
  { id: 25, title: "Accountant", company: "GK International", location: "Kamaryut", type: "Full-time", salary: "6.5 - 8 Lakhs", posted: "5 days ago", urgent: false, category: "Accounting", description: "Full accounting", requirements: ["5+ years", "CPA"], benefits: ["International exp"], referralBonus: "80,000 MMK" }
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
        <Navigation searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
