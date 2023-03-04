// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import screens
import SplashScreen from './src/screens/splash';
import LoginScreen from './src/screens/login';
import ForgotPasswordSendEmailScreen from './src/screens/forgot-password-send-email';
import SignUpScreen from './src/screens/signup';
import HomeScreen from './src/screens/home';
import SearchReceiverScreen from './src/screens/search-receiver';
import InputAmountScreen from './src/screens/input-amount';
import ConfirmationScreen from './src/screens/confirmation';
import SuccessOrFailedTransferScreen from './src/screens/success-or-failed-transfer';
import TransactionHistoryScreen from './src/screens/transaction-history';

import TopUpScreen from './src/screens/top-up';
import ProfileScreen from './src/screens/profile';
import PersonalInfoScreen from './src/screens/personal-info';
import ChangePasswordScreen from './src/screens/change-password';
import ChangePinScreen from './src/screens/change-pin';

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
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ForgotPasswordSendEmailScreen'
          component={ForgotPasswordSendEmailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='SearchReceiverScreen'
          component={SearchReceiverScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='InputAmountScreen'
          component={InputAmountScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ConfirmationScreen'
          component={ConfirmationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='SuccessOrFailedTransferScreen'
          component={SuccessOrFailedTransferScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='TransactionHistoryScreen'
          component={TransactionHistoryScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* TopUp */}
        <Stack.Screen
          name='TopUpScreen'
          component={TopUpScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* Profile */}
        <Stack.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* Personal Info */}
        <Stack.Screen
          name='PersonalInfoScreen'
          component={PersonalInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* Change Password */}
        <Stack.Screen
          name='ChangePasswordScreen'
          component={ChangePasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* Change PIN */}
        <Stack.Screen
          name='ChangePinScreen'
          component={ChangePinScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
