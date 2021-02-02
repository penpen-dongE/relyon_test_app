import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import { Image } from 'react-native' ; 
import { Dimensions } from 'react-native';

export default function Report() {

    const dimensions = Dimensions.get('window');
    const imageHeight = dimensions.width * 2.1;
    const imageHeight1 = dimensions.width * 1.6;
    const imageHeight2 = dimensions.width * 1.4;    
    const imageHeight3 = dimensions.width * 2.6; 

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Image 
                    style={{ height: imageHeight, width: '100%', resizeMode: 'stretch'}}
                    source = {require('./../image/0.jpg')} />
                <Image 
                    style={{ height: imageHeight1, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/1.jpg')} />  
                <Image 
                    style={{ height: imageHeight2, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/2.jpg')} />  
                <Image 
                    style={{ height: imageHeight, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/3.jpg')} /> 
                <Image 
                    style={{ height: imageHeight3, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/4.jpg')} />   
                <Image 
                    style={{ height: imageHeight3, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/5.jpg')} /> 
                <Image 
                    style={{ height: imageHeight, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/6.jpg')} />       
            </ScrollView>    
        </SafeAreaView>     
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 15,
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        width: '90%',
        backgroundColor: 'yellow',
    },

});
