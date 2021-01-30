// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from "react-native";
import Header from './modComponents/Header';
import Title from './modComponents/Title';
import Content from './modComponents/Content';
import Footer from './modComponents/Footer';
import { useRoute } from '@react-navigation/native';



export default function ModifyInfo(props){

    const route = useRoute();
    const image = route.params;
    // console.log("route.params 이미지값 : "+JSON.stringify(image.image));
    // console.log("ModifyInfo - route.params로 넘어온 이미지값 : "+JSON.stringify(image));
    
    return(
        <View style={styles.container}>
            <Header />
            <Title image={JSON.stringify(image.image)} />
            <Content />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f9',
      justifyContent: 'center',
      alignItems: 'center'
    }
})