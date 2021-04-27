import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Login/LoginScreen';
import CalculatorScreen from './Calculator/CalculatorScreen';
import ReportScreen from './Calculator/ReportScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }} />
      
      <Stack.Screen
        name="Report"
        component={ReportScreen} />
      
      <Stack.Screen
        name="Calculator"
        component={CalculatorScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;