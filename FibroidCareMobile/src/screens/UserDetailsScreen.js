
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import RadioButton from '../components/RadioButton';

const UserDetailsScreen = ({ navigation, onSubmitData }) => {
  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    menstrual_irregularities: '',
    pelvic_pain: false,
    pcos_history: false,
    family_history: false,
    number_of_children: '',
    frequent_urination: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.age || !formData.bmi || !formData.menstrual_irregularities || !formData.number_of_children) {
      alert('Please fill all fields');
      return;
    }
    onSubmitData(formData);
    navigation.navigate('Prediction');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Enter Your Details</Text>
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={formData.age}
        onChangeText={(value) => handleInputChange('age', value)}
      />
      <Text style={styles.label}>BMI</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={formData.bmi}
        onChangeText={(value) => handleInputChange('bmi', value)}
      />
      <Text style={styles.label}>Number of Children</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={formData.number_of_children}
        onChangeText={(value) => handleInputChange('number_of_children', value)}
      />

      <Text style={styles.label}>Menstrual Irregularities</Text>
      <RadioButton
        options={[
          { label: 'Regular', value: 'Regular' },
          { label: 'Irregular', value: 'Irregular' },
          { label: 'Heavy Bleeding', value: 'Heavy Bleeding' },
        ]}
        selectedOption={formData.menstrual_irregularities}
        onSelect={(value) => handleInputChange('menstrual_irregularities', value)}
      />

      <Text style={styles.label}>Pelvic Pain</Text>
      <RadioButton
        options={[
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ]}
        selectedOption={formData.pelvic_pain}
        onSelect={(value) => handleInputChange('pelvic_pain', value)}
      />

      <Text style={styles.label}>PCOS History</Text>
      <RadioButton
        options={[
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ]}
        selectedOption={formData.pcos_history}
        onSelect={(value) => handleInputChange('pcos_history', value)}
      />

      <Text style={styles.label}>Family History of Fibroids</Text>
      <RadioButton
        options={[
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ]}
        selectedOption={formData.family_history}
        onSelect={(value) => handleInputChange('family_history', value)}
      />

      <Text style={styles.label}>Frequent Urination</Text>
      <RadioButton
        options={[
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ]}
        selectedOption={formData.frequent_urination}
        onSelect={(value) => handleInputChange('frequent_urination', value)}
      />

      <Button title="Submit for Prediction" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default UserDetailsScreen;
