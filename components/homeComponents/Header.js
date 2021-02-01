import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native' ; 


export default function Header() {
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor={'transparent'} translucent={true}/>
            <Image source = {require('./../../image/text_835.jpg')} />
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 2.3,
        backgroundColor: '#f6f6f9',
        alignItems: 'center',
        justifyContent: 'center'
    }
})