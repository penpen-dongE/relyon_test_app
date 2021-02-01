// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View ,
  StatusBar 
} from 'react-native';
import Header from './homeComponents/Header';
import Title from './homeComponents/Title';
import Content from './homeComponents/Content';
import Footer from './homeComponents/Footer';

export default function Home() {
  
    return(
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <Header/>
          <Title/>
          <Content/>
          <Footer/> 
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f9',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });