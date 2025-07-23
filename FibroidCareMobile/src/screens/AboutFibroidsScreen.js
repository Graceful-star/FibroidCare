
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AboutFibroidsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Understanding Fibroids</Text>
      <Text style={styles.paragraph}>
        Uterine fibroids are non-cancerous growths of the uterus that often appear during childbearing years. Also called leiomyomas or myomas, fibroids aren't associated with an increased risk of uterine cancer and almost never develop into cancer. They can range in size from tiny seedlings, undetectable by the human eye, to bulky masses that can distort and enlarge the uterus. You can have a single fibroid or multiple ones.
      </Text>
      <Text style={styles.paragraph}>
        Many women have uterine fibroids sometime during their lives but don't know they have them because they often cause no symptoms. For women who do have symptoms, the most common include heavy menstrual bleeding, prolonged menstrual periods, pelvic pressure or pain, frequent urination, difficulty emptying the bladder, constipation, and backache or leg pains.
      </Text>
      <Button
        title="Continue to User Details"
        onPress={() => navigation.navigate('UserDetails')}
      />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default AboutFibroidsScreen;
