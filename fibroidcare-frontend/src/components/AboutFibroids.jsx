import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'

const AboutFibroids = ({ onNavigate }) => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Info className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Understanding Fibroids
          </h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Uterine fibroids are non-cancerous growths of the uterus that often appear 
              during childbearing years. Also called leiomyomas or myomas, fibroids aren't 
              associated with an increased risk of uterine cancer and almost never develop 
              into cancer. They can range in size from tiny seedlings, undetectable by the 
              human eye, to bulky masses that can distort and enlarge the uterus. You can 
              have a single fibroid or multiple ones.
            </p>
            
            <p className="text-gray-600 mb-6">
              Many women have uterine fibroids sometime during their lives but don't know 
              they have them because they often cause no symptoms. For women who do 
              have symptoms, the most common include heavy menstrual bleeding, 
              prolonged menstrual periods, pelvic pressure or pain, frequent urination, 
              difficulty emptying the bladder, constipation, and backache or leg pains.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => onNavigate('details')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg rounded-lg transition-colors"
          >
            Continue to User Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutFibroids

