import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Report from './components/Report';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Report/>
      <Footer/> 
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f9',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
