import { useState } from 'react'
import Navigation from './sections/Navigation'
import HeroSection from './sections/HeroSection'
import JobsSection from './sections/JobsSection'

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
}

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
    benefits: ["Health insurance", "Performance bonus", "Transportation"]
  },
  {
    id: 2,
    title: "Warehouse Supervisor",
    company: "Universal Energy",
    location: "Thingangyun",
    type: "Full-time",
    salary: "Negotiable",
    posted: "Urgent",
    urgent: true,
    category: "Operations",
    description: "Manage warehouse operations and inventory control",
    requirements: ["3+ years warehouse experience", "Inventory management", "Team leadership"],
    benefits: ["Competitive salary", "Career growth", "Training provided"]
  },
  {
    id: 3,
    title: "Interior Designer",
    company: "Delight Amatat",
    location: "Thingangyun",
    type: "Full-time",
    salary: "10 - 15 Lakhs",
    posted: "Urgent",
    urgent: true,
    category: "Design",
    description: "Create interior designs for residential and commercial projects",
    requirements: ["Degree in Interior Design", "Proficiency in AutoCAD", "Creative vision"],
    benefits: ["High commission", "Flexible hours", "Creative freedom"]
  },
  {
    id: 4,
    title: "Senior Page Admin",
    company: "TOMO",
    location: "Tamwe",
    type: "Full-time",
    salary: "Negotiable",
    posted: "Urgent",
    urgent: true,
    category: "Marketing",
    description: "Lead social media strategy and content creation",
    requirements: ["3+ years social media management", "Content strategy", "Analytics"],
    benefits: ["Startup equity", "Flexible remote work", "Creative environment"]
  },
  {
    id: 5,
    title: "Assistant Brand Manager",
    company: "Unicharm Myanmar",
    location: "Yankin",
    type: "Full-time",
    salary: "15 - 17 Lakhs",
    posted: "2 days ago",
    urgent: false,
    category: "Marketing",
    description: "Drive brand growth for leading Japanese FMCG company",
    requirements: ["5+ years brand management", "FMCG experience", "Strategic thinking"],
    benefits: ["MNC experience", "Health insurance", "Annual training"]
  },
  {
    id: 6,
    title: "Brand Executive",
    company: "Unicharm Myanmar",
    location: "Yankin",
    type: "Full-time",
    salary: "7 - 9 Lakhs",
    posted: "2 days ago",
    urgent: false,
    category: "Marketing",
    description: "Execute marketing campaigns and brand activations",
    requirements: ["2+ years marketing", "Good communication", "Creative thinking"],
    benefits: ["MNC environment", "Product discounts", "Career development"]
  },
  {
    id: 7,
    title: "Accountant",
    company: "Universal Energy",
    location: "Thingangyun",
    type: "Full-time",
    salary: "6 - 7 Lakhs",
    posted: "3 days ago",
    urgent: false,
    category: "Accounting",
    description: "Manage full spectrum of accounting functions",
    requirements: ["3+ years accounting", "CPA preferred", "Attention to detail"],
    benefits: ["Stable company", "Annual review", "Professional development"]
  },
  {
    id: 8,
    title: "Junior Accountant",
    company: "Unicharm Myanmar",
    location: "Yankin",
    type: "Full-time",
    salary: "3.5 - 4 Lakhs",
    posted: "3 days ago",
    urgent: false,
    category: "Accounting",
    description: "Support senior accounting team in daily operations",
    requirements: ["Fresh grad welcome", "Accounting degree", "Excel skills"],
    benefits: ["MNC training", "Career foundation", "Health insurance"]
  },
  {
    id: 9,
    title: "Graphic Designer",
    company: "WOW Sport",
    location: "Kamaryut",
    type: "Full-time",
    salary: "Around 10 Lakhs",
    posted: "1 week ago",
    urgent: false,
    category: "Design",
    description: "Create visual content for sports brand marketing",
    requirements: ["Strong portfolio", "Adobe Creative Suite", "Creative mindset"],
    benefits: ["Sport industry", "Free gym membership", "Creative freedom"]
  },
  {
    id: 10,
    title: "Senior Sales Executive",
    company: "WOW Sport",
    location: "Kamaryut",
    type: "Full-time",
    salary: "10 Lakhs + Commission",
    posted: "1 week ago",
    urgent: false,
    category: "Sales",
    description: "Lead sales team and drive revenue growth",
    requirements: ["5+ years sales", "B2B experience", "Leadership skills"],
    benefits: ["High commission", "Leadership role", "Sport perks"]
  },
  {
    id: 11,
    title: "Content & Script Writer",
    company: "Shwe Taung Htun",
    location: "Mingalar Taung Nyunt",
    type: "Full-time",
    salary: "4 - 6 Lakhs",
    posted: "2 days ago",
    urgent: false,
    category: "Marketing",
    description: "Create compelling content and scripts for marketing",
    requirements: ["Excellent writing", "Creative storytelling", "Digital marketing trends"],
    benefits: ["Creative environment", "Flexible hours", "Skill development"]
  },
  {
    id: 12,
    title: "Site Engineer",
    company: "Sun Myat Tun",
    location: "Botahtaung",
    type: "Full-time",
    salary: "7.5 Lakhs",
    posted: "4 days ago",
    urgent: false,
    category: "Engineering",
    description: "Supervise construction sites and ensure project quality",
    requirements: ["Civil Engineering degree", "2+ years site experience", "AutoCAD"],
    benefits: ["Project bonuses", "Site allowances", "Career growth"]
  },
  {
    id: 13,
    title: "Data Collector",
    company: "NielsenIQ Myanmar",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "3.5 Lakhs + Allowances",
    posted: "5 days ago",
    urgent: false,
    category: "Research",
    description: "Collect market research data across Myanmar",
    requirements: ["Willingness to travel", "Good communication", "Basic computer skills"],
    benefits: ["Travel allowances", "Flexible schedule", "Training provided"]
  },
  {
    id: 14,
    title: "Loan Officer",
    company: "Real Aid Microfinance",
    location: "Ayeyarwady",
    type: "Full-time",
    salary: "4 - 5 Lakhs + Incentives",
    posted: "1 week ago",
    urgent: false,
    category: "Finance",
    description: "Evaluate loan applications and build client relationships",
    requirements: ["Finance background", "Interpersonal skills", "Local knowledge"],
    benefits: ["Performance incentives", "Rural development impact", "Career progression"]
  },
  {
    id: 15,
    title: "Cashier",
    company: "Real Aid Microfinance",
    location: "Ayeyarwady",
    type: "Full-time",
    salary: "Above 3 Lakhs",
    posted: "1 week ago",
    urgent: false,
    category: "Finance",
    description: "Handle cash transactions and maintain records",
    requirements: ["Basic math skills", "Honesty", "Customer service"],
    benefits: ["Stable employment", "Growth opportunities", "Friendly team"]
  },
  {
    id: 16,
    title: "Senior Agency Sales Representative",
    company: "AMI",
    location: "Kamaryut",
    type: "Full-time",
    salary: "5 - 6.5 Lakhs",
    posted: "6 days ago",
    urgent: false,
    category: "Sales",
    description: "Develop and manage agency partnerships",
    requirements: ["Agency sales experience", "Relationship building", "Target-driven"],
    benefits: ["Agency network", "Performance bonus", "Career growth"]
  },
  {
    id: 17,
    title: "Receptionist",
    company: "Myanmar Information Technology",
    location: "Insein",
    type: "Full-time",
    salary: "3 - 4 Lakhs",
    posted: "3 days ago",
    urgent: false,
    category: "Admin",
    description: "Front desk management and visitor coordination",
    requirements: ["Pleasant personality", "Good communication", "Basic computer skills"],
    benefits: ["IT company exposure", "Professional development", "Modern office"]
  },
  {
    id: 18,
    title: "Assistant Accountant",
    company: "KBZ Life Insurance",
    location: "Bahan",
    type: "Full-time",
    salary: "4 - 5 Lakhs",
    posted: "4 days ago",
    urgent: false,
    category: "Accounting",
    description: "Support accounting operations for insurance company",
    requirements: ["Accounting degree", "1-2 years experience", "Excel proficiency"],
    benefits: ["Insurance industry experience", "KBZ benefits", "Training programs"]
  },
  {
    id: 19,
    title: "Online Sale",
    company: "Salpyar",
    location: "North Dagon",
    type: "Full-time",
    salary: "2.4 Lakhs + Commission",
    posted: "5 days ago",
    urgent: false,
    category: "Sales",
    description: "Manage online sales channels and customer inquiries",
    requirements: ["Social media savvy", "Sales mindset", "Customer service"],
    benefits: ["Commission on sales", "Flexible work", "Learn e-commerce"]
  },
  {
    id: 20,
    title: "Senior Agency Sales Representative",
    company: "AMI",
    location: "Kamaryut",
    type: "Full-time",
    salary: "5 - 6.5 Lakhs",
    posted: "6 days ago",
    urgent: false,
    category: "Sales",
    description: "Manage agency partnerships and sales channels",
    requirements: ["Agency sales experience", "Relationship building", "Negotiation skills"],
    benefits: ["Agency network access", "Performance bonuses", "Career growth"]
  },
  {
    id: 21,
    title: "Admin Supervisor",
    company: "TOMO",
    location: "South Dagon",
    type: "Full-time",
    salary: "5 - 6 Lakhs",
    posted: "1 week ago",
    urgent: false,
    category: "Admin",
    description: "Supervise administrative team and office operations",
    requirements: ["Admin supervision experience", "Organizational skills", "Team leadership"],
    benefits: ["Startup environment", "Learning opportunities", "Modern workplace"]
  },
  {
    id: 22,
    title: "IT Supervisor",
    company: "Wave Plus",
    location: "Mingalardon",
    type: "Full-time",
    salary: "6 Lakhs",
    posted: "4 days ago",
    urgent: false,
    category: "IT",
    description: "Manage IT infrastructure and support team",
    requirements: ["IT degree", "Network management", "Team leadership"],
    benefits: ["Tech environment", "Certification support", "Growth to IT Manager"]
  },
  {
    id: 23,
    title: "Sales Staff",
    company: "Yangoods",
    location: "Pyin Oo Lwin",
    type: "Full-time",
    salary: "2.04 Lakhs + Commission",
    posted: "2 weeks ago",
    urgent: false,
    category: "Sales",
    description: "Retail sales and customer service",
    requirements: ["Sales interest", "Customer friendly", "Local resident preferred"],
    benefits: ["Pyin Oo Lwin location", "Sales commissions", "Product discounts"]
  },
  {
    id: 24,
    title: "Junior Page Admin",
    company: "TOMO",
    location: "Tamwe",
    type: "Full-time",
    salary: "3 - 3.5 Lakhs",
    posted: "1 week ago",
    urgent: false,
    category: "Marketing",
    description: "Assist in social media management and content creation",
    requirements: ["Social media knowledge", "Basic design skills", "Writing ability"],
    benefits: ["Entry-level friendly", "Skill development", "Startup culture"]
  },
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
    benefits: ["International exposure", "Competitive salary", "Professional growth"]
  }
]

function App() {
  const [ setSelectedJob] = useState<Job | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection totalJobs={jobsData.length} />
      <JobsSection jobs={jobsData} onJobSelect={(job) => setSelectedJob} />
    </div>
  )
}

export default App
