
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [predictionData, setPredictionData] = useState(null);

  const handleSubmitData = (userData) => {
    // In a real app, you would make an API call here.
    // For now, we'll just simulate it.
    const risk_score = Math.floor(Math.random() * 101);
    let risk_level = 'Low Risk';
    if (risk_score > 70) {
      risk_level = 'High Risk';
    } else if (risk_score > 40) {
      risk_level = 'Moderate Risk';
    }

    const recommendations = {
        title: 'Personalized Recommendations',
        description: 'Based on your risk profile, here are some recommendations.',
        urgent: risk_level === 'High Risk',
        recommendations: [
          'Maintain a healthy weight.',
          'Eat a balanced diet rich in fruits, vegetables, and whole grains.',
          'Exercise regularly.',
          'Consult a healthcare provider for regular check-ups.',
        ],
    };

    if (risk_level === 'High Risk') {
        recommendations.recommendations.push('Seek immediate medical attention.');
    }

    setPredictionData({
      prediction: {
        risk_level,
        risk_score,
      },
      recommendations,
      disclaimer: 'This prediction is for informational purposes only and should not replace professional medical advice.',
    });
  };

  return (
    <NavigationContainer>
      <AppNavigator onSubmitData={handleSubmitData} />
    </NavigationContainer>
  );
};

export default App;
