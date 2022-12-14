import {View , Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';   // error in setting up redux store
import { store } from './Redux/store';

import FirstScreen from './ScreenComponets/FirstScreen/FirstScreen';
import LoginScreen from './ScreenComponets/LoginScreen/LoginScreen';
import SignupScreen from './ScreenComponets/SignupScreen/SignupScreen';
import HomeScreen from './ScreenComponets/HomeScreen/HomeScreen';
import PDateAndTime from './ScreenComponets/PDateAndTime/PDateAndTime';
import DDateAndTime from './ScreenComponets/DDateAndTime/DDateAndTime';

const Stack = createNativeStackNavigator();

export default function App() {
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

  );
}


AIzaSyBDQ3EniKl0EeJpFVV21UfMPBpg8A1OHds