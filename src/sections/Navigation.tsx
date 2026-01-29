import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, Briefcase, Users } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface NavigationProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function Navigation({ searchQuery, setSearchQuery }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              T
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold transition-colors ${isScrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'}`}>
                TRM Jobs
              </h1>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isScrolled ? 'text-slate-400' : 'text-slate-400 md:text-white/70'}`} size={20} />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-full border outline-none transition-all ${
                  isScrolled 
                    ? 'bg-slate-100 border-slate-200 focus:bg-white text-slate-800' 
                    : 'bg-white/10 border-white/20 text-slate-800 md:text-white placeholder-slate-500 md:placeholder-white/60'
                }`}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === '/' ? 'bg-blue-600 text-white' : isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-800 md:text-white/90 hover:bg-white/10'}`}>
              Jobs
            </Link>
            <Link to="/referrals" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === '/referrals' ? 'bg-blue-600 text-white' : isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-800 md:text-white/90 hover:bg-white/10'}`}>
              Referrals
            </Link>
            <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all">
              Post a Job
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-800">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-4">
              <input type="text" placeholder="Search jobs..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-100 border-none" />
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50">Jobs</Link>
              <Link to="/referrals" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50">Referrals</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
