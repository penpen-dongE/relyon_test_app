import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View ,
  Button 
} from 'react-native';

export default function Home({ navigation }) {
  
    return(
        <View style={styles.container}>
            <Button title={"사진 촬영"}
              onPress = {() => navigation.navigate('TakePic')} />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });