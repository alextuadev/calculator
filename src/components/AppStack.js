import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login/LoginScreen';
import CalculatorScreen from './Calculator/CalculatorScreen';
import ReportScreen from './Calculator/ReportScreen';
import ReportHeader from './Report/ReportHeader';
import Colors from '../res/colors';
import { Image } from 'react-native';


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
        component={ReportScreen}
        options={{
          headerBackImage: () => {
            <Image style={{ width: 27, height: 27 }} source={require('../assets/img/logo.png')} />
          },
          headerLeft: null,
          headerStyle: {
            backgroundColor: Colors.bgGray,
            height: 127,
          },
          headerTitle: props => <ReportHeader {...props} />
        }}
      />

      <Stack.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          headerBackImage: () => {
            <Image style={{ width: 27, height: 27 }} source={require('../assets/img/logo.png')} />
          },
          headerLeft: null,
          headerStyle: {
            backgroundColor: Colors.bgGray,
            height: 127,
          },
          headerTitle: props => <ReportHeader {...props} />
        }} />
    </Stack.Navigator>
  );
}

export default AppStack;