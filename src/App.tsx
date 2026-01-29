import { useState } from 'react'
import Navigation from './sections/Navigation'
import HeroSection from './sections/HeroSection'
import JobsSection from './sections/JobsSection'
import JobDetail from './sections/JobDetail'

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
  description?: string
  requirements?: string[]
  benefits?: string[]
}

export const jobsData: Job[] = [
  {
    id: 1,
    title: "Senior Supervisor",
    company: "RK Yangon Steel",
    location: "Thanlyin",
    type: "Full-time",
    salary: "7.5 Lakhs - 10 Lakhs",
    posted: "Urgent",
    urgent: true,
    category: "Operations",
    description: "Oversee daily operations and manage team performance.",
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
    description: "Manage warehouse operations and inventory control.",
    requirements: ["3+ years warehouse experience", "Inventory management", "Team leadership"],
    benefits: ["Competitive salary", "Career growth", "Training provided"]
  },
  {
    id: 3,
    title: "Content & Script Writer",
    company: "Shwe Taung Htun",
    location: "Mingalar Taung Nyunt",
    type: "Full-time",
    salary: "4 Lakhs - 6 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Marketing",
    description: "Create engaging content and scripts for marketing campaigns.",
    requirements: ["Excellent writing skills", "Creative mindset", "Burmese & English proficiency"],
    benefits: ["Creative environment", "Flexible hours", "Skill development"]
  },
  {
    id: 4,
    title: "Site Engineer",
    company: "Sun Myat Tun",
    location: "Botahtaung",
    type: "Full-time",
    salary: "7.5 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Engineering",
    description: "Supervise construction sites and ensure project quality.",
    requirements: ["Civil Engineering degree", "Site experience", "AutoCAD knowledge"],
    benefits: ["Project bonuses", "Site allowances", "Professional development"]
  },
  {
    id: 5,
    title: "Data Collector",
    company: "NielsenIQ Myanmar",
    location: "Mandalay, Sagaing, Meikhtila",
    type: "Full-time",
    salary: "3.5 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Research",
    description: "Collect market research data from various locations.",
    requirements: ["Good communication", "Travel flexibility", "Basic computer skills"],
    benefits: ["Travel allowances", "Flexible schedule", "Entry-level friendly"]
  },
  {
    id: 6,
    title: "Loan Officer",
    company: "Real Aid Microfinance",
    location: "Ayeyarwady",
    type: "Full-time",
    salary: "4 Lakhs - 5 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Finance",
    description: "Evaluate loan applications and manage client relationships.",
    requirements: ["Finance background", "Customer service skills", "Local area knowledge"],
    benefits: ["Performance incentives", "Career progression", "Training provided"]
  },
  {
    id: 7,
    title: "Cashier",
    company: "Real Aid Microfinance",
    location: "Ayeyarwady",
    type: "Full-time",
    salary: "Above 3 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Finance",
    description: "Handle cash transactions and maintain accurate records.",
    requirements: ["Basic math skills", "Honesty", "Customer service"],
    benefits: ["Stable job", "Growth opportunities", "Friendly team"]
  },
  {
    id: 8,
    title: "Brand Executive",
    company: "Unicharm Myanmar",
    location: "Yankin",
    type: "Full-time",
    salary: "7 Lakhs - 9 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Marketing",
    description: "Execute brand strategies and marketing campaigns.",
    requirements: ["Marketing degree", "Brand management experience", "Creative thinking"],
    benefits: ["MNC experience", "Product discounts", "Health benefits"]
  },
  {
    id: 9,
    title: "Assistant Brand Manager",
    company: "Unicharm Myanmar",
    location: "Yankin",
    type: "Full-time",
    salary: "15 Lakhs - 17 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Marketing",
    description: "Lead brand initiatives and manage marketing team.",
    requirements: ["5+ years brand management", "Leadership skills", "Strategic thinking"],
    benefits: ["High salary", "MNC benefits", "Career growth"]
  },
  {
    id: 10,
    title: "Receptionist",
    company: "Myanmar Information Technology",
    location: "Insein",
    type: "Full-time",
    salary: "3 Lakhs - 4 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Admin",
    description: "Front desk management and visitor coordination.",
    requirements: ["Pleasant personality", "Good communication", "Basic computer skills"],
    benefits: ["Professional environment", "Training", "Career path"]
  },
  {
    id: 11,
    title: "Assistant Accountant",
    company: "KBZ Life Insurance",
    location: "Bahan",
    type: "Full-time",
    salary: "4 Lakhs - 5 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Accounting",
    description: "Assist in daily accounting operations and reporting.",
    requirements: ["Accounting degree", "1-2 years experience", "Excel proficiency"],
    benefits: ["Insurance benefits", "Stable company", "Professional training"]
  },
  {
    id: 12,
    title: "Accountant",
    company: "Universal Energy",
    location: "Thingangyun",
    type: "Full-time",
    salary: "6 Lakhs - 7 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Accounting",
    description: "Manage financial records and prepare reports.",
    requirements: ["3+ years accounting", "Accounting software", "Attention to detail"],
    benefits: ["Competitive package", "Energy sector experience", "Growth opportunities"]
  },
  {
    id: 13,
    title: "Online Sale",
    company: "Salpyar",
    location: "North Dagon",
    type: "Full-time",
    salary: "2.4 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Sales",
    description: "Handle online sales and customer inquiries.",
    requirements: ["Sales skills", "Social media knowledge", "Customer service"],
    benefits: ["Commission", "Flexible work", "Learning opportunity"]
  },
  {
    id: 14,
    title: "Graphic Designer",
    company: "WOW Sport",
    location: "Kamaryut",
    type: "Full-time",
    salary: "Around 10 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Design",
    description: "Create visual content for marketing and branding.",
    requirements: ["Design degree", "Adobe Creative Suite", "Creative portfolio"],
    benefits: ["Creative freedom", "Sport industry", "Modern office"]
  },
  {
    id: 15,
    title: "Senior Sales Executive",
    company: "WOW Sport",
    location: "Kamaryut",
    type: "Full-time",
    salary: "10 Lakhs",
    posted: "Today",
    urgent: false,
    category: "Sales",
    description: "Lead sales team and achieve revenue targets.",
    requirements: ["5+ years sales", "Team leadership", "Sport industry knowledge"],
    benefits: ["High commission", "Leadership role", "Sport perks"]
  },
  {
    id: 16,
    title: "Senior Agency Sales Representative",
    company: "AMI",
    location: "Kamaryut",
    type: "Full-time",
    salary: "5 Lakhs - 
 }
