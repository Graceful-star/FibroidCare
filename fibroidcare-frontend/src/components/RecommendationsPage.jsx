import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, ArrowRight, Home } from 'lucide-react'

const RecommendationsPage = ({ predictionData, onNavigate }) => {
  if (!predictionData) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Recommendation Data</h2>
          <p className="text-gray-600 mb-6">Please complete the prediction first.</p>
          <Button onClick={() => onNavigate('details')}>
            Go to User Details
          </Button>
        </div>
      </div>
    )
  }

  const { recommendations } = predictionData

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {recommendations.title}
          </h1>
        </div>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              {recommendations.description}
            </p>
          </CardContent>
        </Card>
        
        {recommendations.urgent && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-700">
                <AlertTriangle className="w-6 h-6" />
                <span>Urgent Steps</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recommendations.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
        
        {!recommendations.urgent && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recommendations.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-500 text-center">
              <strong>Disclaimer:</strong> {predictionData.disclaimer}
            </p>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <Button 
            onClick={() => onNavigate('welcome')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg rounded-lg transition-colors inline-flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RecommendationsPage

