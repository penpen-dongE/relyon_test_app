
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './components/Home';
import TakePic from './components/TakePic';
import ModifyInfo from './components/ModifyInfo';
import ConfirmModal from './components/ConfirmModal';
import Report from './components/Report';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalPortal } from 'react-native-modals';

// import { Provider } from 'react-redux';


// StackNavigator 객체 생성
const Stack = createStackNavigator();
export default class extends React.Component {

  render(){
    return (
      <React.Fragment>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TakePic" component={TakePic} />
            <Stack.Screen name="ModifyInfo" component={ModifyInfo} 
              image={({ params }) => params.image} />
            <Stack.Screen name="ConfirmModal" component={ConfirmModal}
              token={({ params }) => params.token}
              check={({ params }) => params.check} />
            <Stack.Screen name="Report" component={Report} />
          </Stack.Navigator>
        </NavigationContainer> 
        <ModalPortal/>
      </React.Fragment>
    );
  }
}

