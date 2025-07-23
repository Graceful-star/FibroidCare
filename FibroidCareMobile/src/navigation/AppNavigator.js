
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import AboutFibroidsScreen from '../screens/AboutFibroidsScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import PredictionScreen from '../screens/PredictionScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';

const Stack = createStackNavigator();

const AppNavigator = ({ onSubmitData }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="AboutFibroids" component={AboutFibroidsScreen} />
      <Stack.Screen name="UserDetails">
        {(props) => <UserDetailsScreen {...props} onSubmitData={onSubmitData} />}
      </Stack.Screen>
      <Stack.Screen name="Prediction" component={PredictionScreen} />
      <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
