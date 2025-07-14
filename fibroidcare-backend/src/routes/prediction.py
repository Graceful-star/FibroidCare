from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
import random

prediction_bp = Blueprint('prediction', __name__)

def calculate_fibroid_risk(user_data):
    """
    Mock ML model for fibroid risk prediction.
    In a real application, this would use a trained ML model.
    """
    risk_score = 0
    
    # Age factor (higher risk with age)
    age = user_data.get('age', 30)
    if age > 40:
        risk_score += 30
    elif age > 30:
        risk_score += 15
    
    # BMI factor
    bmi = user_data.get('bmi', 25)
    if bmi > 30:
        risk_score += 20
    elif bmi > 25:
        risk_score += 10
    
    # Menstrual irregularities
    if user_data.get('menstrual_irregularities') == 'Heavy Bleeding':
        risk_score += 25
    elif user_data.get('menstrual_irregularities') == 'Irregular':
        risk_score += 15
    
    # Pelvic pain
    if user_data.get('pelvic_pain'):
        risk_score += 20
    
    # PCOS history
    if user_data.get('pcos_history'):
        risk_score += 15
    
    # Family history
    if user_data.get('family_history'):
        risk_score += 25
    
    # Number of children (protective factor)
    children = user_data.get('number_of_children', 0)
    if children == 0:
        risk_score += 10
    elif children >= 3:
        risk_score -= 10
    
    # Frequent urination
    if user_data.get('frequent_urination'):
        risk_score += 10
    
    # Add some randomness to make it more realistic
    risk_score += random.randint(-5, 5)
    
    # Normalize to 0-100 scale
    risk_score = max(0, min(100, risk_score))
    
    # Determine risk level
    if risk_score < 30:
        risk_level = "Low Risk"
        risk_color = "#10B981"  # Green
    elif risk_score < 60:
        risk_level = "Moderate Risk"
        risk_color = "#F59E0B"  # Yellow
    else:
        risk_level = "High Risk"
        risk_color = "#EF4444"  # Red
    
    return {
        'risk_score': risk_score,
        'risk_level': risk_level,
        'risk_color': risk_color
    }

def get_recommendations(risk_level):
    """
    Get recommendations based on risk level
    """
    if risk_level == "Low Risk":
        return {
            'title': 'Low Risk Recommendations',
            'description': 'Based on the information you provided, our AI/ML model predicts a low risk of developing fibroids. This prediction is for informational purposes only and should not replace professional medical advice.',
            'recommendations': [
                'Maintain a healthy diet rich in fruits and vegetables',
                'Exercise regularly to maintain a healthy weight',
                'Schedule routine gynecological check-ups',
                'Monitor any changes in menstrual patterns'
            ],
            'urgent': False
        }
    elif risk_level == "Moderate Risk":
        return {
            'title': 'Moderate Risk Recommendations',
            'description': 'Based on your assessment, you have a moderate risk of developing fibroids. Consider discussing these results with your healthcare provider.',
            'recommendations': [
                'Schedule an appointment with your gynecologist within 3-6 months',
                'Discuss your symptoms and family history with your doctor',
                'Consider lifestyle modifications to reduce risk factors',
                'Monitor symptoms and seek medical attention if they worsen'
            ],
            'urgent': False
        }
    else:  # High Risk
        return {
            'title': 'High Risk Recommendations',
            'description': 'Based on your assessment, it is highly recommended that you consult with a healthcare professional as soon as possible for a comprehensive evaluation and personalized advice regarding fibroid management.',
            'recommendations': [
                'Schedule an appointment with a gynecologist or fibroid specialist immediately',
                'Discuss your prediction results and any symptoms you may be experiencing',
                'Undergo further diagnostic tests as recommended by your doctor (e.g., ultrasound, MRI)',
                'Explore potential treatment options, which may include medication, minimally invasive procedures, or surgery'
            ],
            'urgent': True
        }

@prediction_bp.route('/predict', methods=['POST'])
@cross_origin()
def predict_fibroid_risk():
    try:
        user_data = request.get_json()
        
        if not user_data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Calculate risk
        prediction = calculate_fibroid_risk(user_data)
        
        # Get recommendations
        recommendations = get_recommendations(prediction['risk_level'])
        
        response = {
            'prediction': prediction,
            'recommendations': recommendations,
            'disclaimer': 'These recommendations are general and not a substitute for professional medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment.'
        }
        
        return jsonify(response)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@prediction_bp.route('/health', methods=['GET'])
@cross_origin()
def health_check():
    return jsonify({'status': 'healthy', 'service': 'FibroidCare Prediction API'})

