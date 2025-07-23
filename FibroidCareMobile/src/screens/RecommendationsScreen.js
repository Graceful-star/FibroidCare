
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const RecommendationsScreen = ({ navigation, route }) => {
  const { predictionData } = route.params;

  if (!predictionData) {
    return (
      <View style={styles.container}>
        <Text>No recommendation data available.</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const { recommendations } = predictionData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recommendations.title}</Text>
      <Text style={styles.description}>{recommendations.description}</Text>
      <FlatList
        data={recommendations.recommendations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.recommendation}>{item}</Text>}
      />
      <Text style={styles.disclaimer}>{predictionData.disclaimer}</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  recommendation: {
    fontSize: 16,
    marginBottom: 10,
  },
  disclaimer: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RecommendationsScreen;
