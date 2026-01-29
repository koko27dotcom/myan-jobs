import { Link, useLocation } from 'react-router-dom'
import { Home, Briefcase, Users, User, Plus } from 'lucide-react'

export default function MobileNav() {
  const location = useLocation()
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 pb-safe">
      <div className="flex justify-around items-center px-2 py-2">
        <Link to="/" className={`flex flex-col items-center gap-1 p-3 rounded-xl ${location.pathname === '/' ? 'text-blue-600' : 'text-slate-400'}`}>
          <Home size={24} />
          <span className="text-xs font-medium">Home</span>
        </Link>
        <Link to="/" className={`flex flex-col items-center gap-1 p-3 rounded-xl ${location.pathname === '/jobs' ? 'text-blue-600' : 'text-slate-400'}`}>
          <Briefcase size={24} />
          <span className="text-xs font-medium">Jobs</span>
        </Link>
        <Link to="/referrals" className="relative -top-6">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <Plus size={28} />
          </div>
        </Link>
        <Link to="/referrals" className={`flex flex-col items-center gap-1 p-3 rounded-xl ${location.pathname === '/referrals' ? 'text-blue-600' : 'text-slate-400'}`}>
          <Users size={24} />
          <span className="text-xs font-medium">Earn</span>
        </Link>
        <Link to="/" className={`flex flex-col items-center gap-1 p-3 rounded-xl ${location.pathname === '/profile' ? 'text-blue-600' : 'text-slate-400'}`}>
          <User size={24} />
          <span className="text-xs font-medium">Profile</span>
        </Link>
      </div>
    </div>
  )
}
