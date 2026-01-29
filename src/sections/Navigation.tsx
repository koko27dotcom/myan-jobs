import { useState } from 'react'
import { Menu, X, Briefcase } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-2" />
            <span className="font-bold text-xl text-gray-900">Myanmar Jobs</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#jobs" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Jobs</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <button className="btn-primary text-sm">Post a Job</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#jobs" className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Jobs</a>
          <a href="#about" className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
        </div>
      )}
    </nav>
  )
}
