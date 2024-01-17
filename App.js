/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/LoginScreen';
import HooksParent from './src/HooksAssignment/HooksParent';






const App = () => {
  // const Stack = createNativeStackNavigator();

  return(
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login'>

    //     <Stack.Screen name='Login' component={LoginScreen}/>
    //     <Stack.Screen name='Home' component={HomeScreen}/>

    //   </Stack.Navigator>

    // </NavigationContainer>
    <HooksParent />
  
    );
}

export default App;
