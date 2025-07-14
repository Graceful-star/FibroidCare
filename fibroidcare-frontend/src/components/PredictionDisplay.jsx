import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react'

const PredictionDisplay = ({ predictionData, onNavigate }) => {
  if (!predictionData) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Prediction Data</h2>
          <p className="text-gray-600 mb-6">Please complete the user details form first.</p>
          <Button onClick={() => onNavigate('details')}>
            Go to User Details
          </Button>
        </div>
      </div>
    )
  }

  const { prediction } = predictionData
  const getRiskIcon = () => {
    switch (prediction.risk_level) {
      case 'Low Risk':
        return <CheckCircle className="w-16 h-16 text-green-500" />
      case 'Moderate Risk':
        return <AlertTriangle className="w-16 h-16 text-yellow-500" />
      case 'High Risk':
        return <AlertCircle className="w-16 h-16 text-red-500" />
      default:
        return <AlertCircle className="w-16 h-16 text-gray-500" />
    }
  }

  const getRiskColor = () => {
    switch (prediction.risk_level) {
      case 'Low Risk':
        return 'text-green-600'
      case 'Moderate Risk':
        return 'text-yellow-600'
      case 'High Risk':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Your Fibroid Risk Prediction
          </h1>
        </div>
        
        <Card className="mb-8">
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {getRiskIcon()}
              </div>
              
              <h2 className={`text-5xl font-bold mb-4 ${getRiskColor()}`}>
                {prediction.risk_level}
              </h2>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Based on the information you provided, our AI/ML model predicts a{' '}
                  <span className={`font-semibold ${getRiskColor()}`}>
                    {prediction.risk_level.toLowerCase()}
                  </span>{' '}
                  of developing fibroids. This prediction is for informational purposes only 
                  and should not replace professional medical advice.
                </p>
              </div>
              
              <div className="text-sm text-gray-500 mb-6">
                Risk Score: {prediction.risk_score}/100
              </div>
              
              <Button 
                onClick={() => onNavigate('recommendations')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg rounded-lg transition-colors"
              >
                View Recommendations
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <span>Important Disclaimer</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {predictionData.disclaimer}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PredictionDisplay

