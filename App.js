/*
This app is a "Hello World" basic app that will first allow users to authenticate
themselves by creating account, then upload strings to the cloud.
*/

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LandingScreen from './screens/LandingScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={ LandingScreen } />
        <Stack.Screen name="Register" component={ RegisterScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

