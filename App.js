
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TakePic from './components/TakePic';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// StackNavigator 객체 생성
const Stack = createStackNavigator();
export default class extends React.Component {

  render(){
    return (
      
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TakePic" component={TakePic} />
          </Stack.Navigator>
      </NavigationContainer>      
    );
  }
}

