// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import screens
import SplashScreen from './src/screens/splash';
import LoginScreen from './src/screens/login';

const Stack = createNativeStackNavigator();

//navigation screens
function App() {
  return (
    <NavigationContainer>
      {/* initial mau tampil mana duluan */}
      {/* <Stack.Navigator initialRouteName=''> */}
      <Stack.Navigator>
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
