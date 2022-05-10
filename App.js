import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DailyPic from './Screens/DailyPic'
import SpaceCrafts from './Screens/SpaceCrafts'
import StarMap from './Screens/StarMap'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer> 
    <Stack.Navigator initialRouteName = 'HomeScreen' screenOptions = {{
      headerShown:false
    }}> 
    <Stack.Screen name = 'HomeScreen' component = {HomeScreen}/>
    <Stack.Screen name = 'DailyPic' component = {DailyPic}/>
    <Stack.Screen name = 'SpaceCrafts' component = {SpaceCrafts}/>
    <Stack.Screen name = 'StarMap' component = {StarMap}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

