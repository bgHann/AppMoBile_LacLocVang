import React from 'react';
import OnbroardScreen from './src/screens/onbroard/OnbroardScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BanketScreen from './src/screens/banket/BanketScreen';
import KhoLocScreen from './src/screens/kholoc/KhoLocScreen';
import TrangLacScreen from './src/screens/tranglac/TrangLacScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnbroardScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OnbroardScreen" component={OnbroardScreen} />
        <Stack.Screen name="BanketScreen" component={BanketScreen} />
        <Stack.Screen name="KhoLocScreen" component={KhoLocScreen} />
        <Stack.Screen name="TrangLacScreen" component={TrangLacScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
