import { useState } from 'react'
import { Search, MapPin, Building2, DollarSign } from 'lucide-react'
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

interface Props {
  jobs: Job[]
  onJobSelect: (job: Job) => void
}

export default function JobsSection({ jobs, onJobSelect }: Props) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="jobs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Positions</h2>
          <p className="text-lg text-gray-600">Showing {filteredJobs.length} jobs</p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs, companies, or locations..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className="card cursor-pointer hover:scale-105"
              onClick={() => onJobSelect(job)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <div className="flex items-center text-blue-600">
                      <Building2 className="w-4 h-4 mr-1" />
                      <span className="text-sm">{job.company}</span>
                    </div>
                  </div>
                  {job.urgent && (
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">URGENT</span>
                  )}
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{job.location}</div>
                  <div className="flex items-center text-green-600 font-semibold"><DollarSign className="w-4 h-4 mr-2" />{job.salary}</div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{job.category}</span>
                  <span className="text-sm text-blue-600 font-medium">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
