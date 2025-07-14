import { useState } from 'react'
import Navigation from './components/Navigation'
import WelcomePage from './components/WelcomePage'
import AboutFibroids from './components/AboutFibroids'
import UserDetails from './components/UserDetails'
import PredictionDisplay from './components/PredictionDisplay'
import RecommendationsPage from './components/RecommendationsPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome')
  const [predictionData, setPredictionData] = useState(null)

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const handleSubmitData = async (userData) => {
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error('Failed to get prediction')
      }

      const data = await response.json()
      setPredictionData(data)
    } catch (error) {
      console.error('Error submitting data:', error)
      throw error
    }
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onNavigate={handleNavigate} />
      case 'about':
        return <AboutFibroids onNavigate={handleNavigate} />
      case 'details':
        return <UserDetails onNavigate={handleNavigate} onSubmitData={handleSubmitData} />
      case 'prediction':
        return <PredictionDisplay predictionData={predictionData} onNavigate={handleNavigate} />
      case 'recommendations':
        return <RecommendationsPage predictionData={predictionData} onNavigate={handleNavigate} />
      default:
        return <WelcomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderCurrentPage()}
    </div>
  )
}

export default App
