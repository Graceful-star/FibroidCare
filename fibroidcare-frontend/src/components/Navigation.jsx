import { Home, Info, User, BarChart3, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navigation = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'welcome', label: 'Welcome', icon: Home },
    { id: 'about', label: 'About Fibroids', icon: Info },
    { id: 'details', label: 'User Details', icon: User },
    { id: 'prediction', label: 'Prediction', icon: BarChart3 },
    { id: 'recommendations', label: 'Recommendations', icon: MapPin },
  ]

  return (
    <nav className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">FibroidCare</h1>
      </div>
      
      <ul className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          const isDisabled = (item.id === 'prediction' || item.id === 'recommendations') && currentPage !== 'prediction' && currentPage !== 'recommendations'
          
          return (
            <li key={item.id}>
              <button
                onClick={() => !isDisabled && onNavigate(item.id)}
                disabled={isDisabled}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors",
                  isActive 
                    ? "bg-gray-200 text-gray-900 font-medium" 
                    : isDisabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation

