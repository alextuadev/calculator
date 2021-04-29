import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/components/AppStack';
import { Provider } from 'react-redux';
import configureStore from './src/store';

const { store } = configureStore();

const App = () => (
  <Provider
    store={store}>
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  </Provider>
);
export default App;
