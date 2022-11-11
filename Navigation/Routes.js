import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from '../ScreenComponets/FirstScreen/FirstScreen';
import LoginScreen from '../ScreenComponets/LoginScreen/LoginScreen'
import SignupScreen from '../ScreenComponets/SignupScreen/SignupScreen';
import HomeScreen from '../ScreenComponets/HomeScreen/HomeScreen';
import PDateAndTime from '../ScreenComponets/PDateAndTime/PDateAndTime';
import DDateAndTime from '../ScreenComponets/DDateAndTime/DDateAndTime';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='firstScreen'>
       <Stack.Screen name="firstScreen" component={FirstScreen} options={{headerShown:false}}/>
       <Stack.Screen name="loginScreen" component={LoginScreen} options={{headerShown:false}}/>
       <Stack.Screen name="signupScreen" component={SignupScreen} options={{headerShown:false}}/>
       <Stack.Screen name="homeScreen" component={HomeScreen} options={{headerShown:false}}/>
       <Stack.Screen name="PDateAndTime" component={PDateAndTime} options={{headerShown:false}}/>
       <Stack.Screen name="DDateAndTime" component={DDateAndTime} options={{headerShown:false}}/>

    
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routes
