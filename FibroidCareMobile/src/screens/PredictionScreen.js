
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PredictionScreen = ({ navigation, route }) => {
  const { predictionData } = route.params ?? {};

  if (!predictionData) {
    return (
      <View style={styles.container}>
        <Text>No prediction data available.</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const { prediction } = predictionData;

  const getRiskColor = () => {
    switch (prediction.risk_level) {
      case 'Low Risk':
        return 'green';
      case 'Moderate Risk':
        return 'orange';
      case 'High Risk':
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Fibroid Risk Prediction</Text>
      <Text style={[styles.riskLevel, { color: getRiskColor() }]}>
        {prediction.risk_level}
      </Text>
      <Text style={styles.riskScore}>Risk Score: {prediction.risk_score}/100</Text>
      <Text style={styles.disclaimer}>{predictionData.disclaimer}</Text>
      <Button
        title="View Recommendations"
        onPress={() => navigation.navigate('Recommendations', { predictionData })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  riskLevel: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  riskScore: {
    fontSize: 18,
    marginBottom: 20,
  },
  disclaimer: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default PredictionScreen;
