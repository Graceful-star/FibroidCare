import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const UserDetails = ({ onNavigate, onSubmitData }) => {
  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    menstrual_irregularities: '',
    pelvic_pain: false,
    pcos_history: false,
    family_history: false,
    number_of_children: '',
    frequent_urination: false
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.age || formData.age < 18 || formData.age > 100) {
      newErrors.age = 'Please enter a valid age between 18 and 100'
    }
    
    if (!formData.bmi || formData.bmi < 15 || formData.bmi > 50) {
      newErrors.bmi = 'Please enter a valid BMI between 15 and 50'
    }
    
    if (!formData.menstrual_irregularities) {
      newErrors.menstrual_irregularities = 'Please select an option'
    }
    
    if (!formData.number_of_children || formData.number_of_children < 0) {
      newErrors.number_of_children = 'Please enter a valid number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Convert string values to appropriate types
      const submissionData = {
        ...formData,
        age: parseInt(formData.age),
        bmi: parseFloat(formData.bmi),
        number_of_children: parseInt(formData.number_of_children)
      }
      
      await onSubmitData(submissionData)
      onNavigate('prediction')
    } catch (error) {
      console.error('Error submitting data:', error)
      setErrors({ submit: 'Failed to submit data. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="flex-1 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Enter Your Details
          </h1>
          <p className="text-gray-600">
            Please provide the following information to help us assess your fibroid risk.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Health Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Age */}
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="e.g., 30"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className={errors.age ? 'border-red-500' : ''}
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
              </div>

              {/* BMI */}
              <div>
                <Label htmlFor="bmi">BMI</Label>
                <Input
                  id="bmi"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 25.5"
                  value={formData.bmi}
                  onChange={(e) => handleInputChange('bmi', e.target.value)}
                  className={errors.bmi ? 'border-red-500' : ''}
                />
                {errors.bmi && <p className="text-red-500 text-sm mt-1">{errors.bmi}</p>}
              </div>

              {/* Menstrual Irregularities */}
              <div>
                <Label>Menstrual Irregularities</Label>
                <RadioGroup
                  value={formData.menstrual_irregularities}
                  onValueChange={(value) => handleInputChange('menstrual_irregularities', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Regular" id="regular" />
                    <Label htmlFor="regular">Regular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Irregular" id="irregular" />
                    <Label htmlFor="irregular">Irregular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Heavy Bleeding" id="heavy" />
                    <Label htmlFor="heavy">Heavy Bleeding</Label>
                  </div>
                </RadioGroup>
                {errors.menstrual_irregularities && (
                  <p className="text-red-500 text-sm mt-1">{errors.menstrual_irregularities}</p>
                )}
              </div>

              {/* Pelvic Pain */}
              <div>
                <Label>Pelvic Pain</Label>
                <RadioGroup
                  value={formData.pelvic_pain.toString()}
                  onValueChange={(value) => handleInputChange('pelvic_pain', value === 'true')}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="pain-yes" />
                    <Label htmlFor="pain-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="pain-no" />
                    <Label htmlFor="pain-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* PCOS History */}
              <div>
                <Label>PCOS History</Label>
                <RadioGroup
                  value={formData.pcos_history.toString()}
                  onValueChange={(value) => handleInputChange('pcos_history', value === 'true')}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="pcos-yes" />
                    <Label htmlFor="pcos-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="pcos-no" />
                    <Label htmlFor="pcos-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Family History of Fibroids */}
              <div>
                <Label>Family History of Fibroids</Label>
                <RadioGroup
                  value={formData.family_history.toString()}
                  onValueChange={(value) => handleInputChange('family_history', value === 'true')}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="family-yes" />
                    <Label htmlFor="family-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="family-no" />
                    <Label htmlFor="family-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Number of Children */}
              <div>
                <Label htmlFor="children">Number of Children</Label>
                <Input
                  id="children"
                  type="number"
                  min="0"
                  placeholder="e.g., 2"
                  value={formData.number_of_children}
                  onChange={(e) => handleInputChange('number_of_children', e.target.value)}
                  className={errors.number_of_children ? 'border-red-500' : ''}
                />
                {errors.number_of_children && (
                  <p className="text-red-500 text-sm mt-1">{errors.number_of_children}</p>
                )}
              </div>

              {/* Frequent Urination */}
              <div>
                <Label>Frequent Urination</Label>
                <RadioGroup
                  value={formData.frequent_urination.toString()}
                  onValueChange={(value) => handleInputChange('frequent_urination', value === 'true')}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="urination-yes" />
                    <Label htmlFor="urination-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="urination-no" />
                    <Label htmlFor="urination-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {errors.submit && (
                <p className="text-red-500 text-sm">{errors.submit}</p>
              )}

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg rounded-lg transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit for Prediction'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default UserDetails

