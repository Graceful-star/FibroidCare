import { Button } from '@/components/ui/button'

const WelcomePage = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to FibroidCare
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          FibroidCare is an AI/ML-based application designed to help you assess your 
          potential risk of fibroids. By providing a few details, our intelligent model can 
          offer insights and personalized recommendations to support your health 
          journey.
        </p>
        
        <Button 
          onClick={() => onNavigate('about')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg rounded-lg transition-colors"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default WelcomePage

