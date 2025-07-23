
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FibroidCare</Text>
      <Text style={styles.description}>
        FibroidCare is an AI/ML-based application designed to help you assess your potential risk of fibroids. By providing a few details, our intelligent model can offer insights and personalized recommendations to support your health journey.
      </Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('AboutFibroids')}
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
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
