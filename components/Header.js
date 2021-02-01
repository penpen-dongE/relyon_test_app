import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native' ; 


export default function Header() {
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor={'transparent'} translucent={true}/>
            <View style={styles.container1}>
                <Image 
                    style={{height:'50%',width:'50%',resizeMode:'contain'}}  
                    source = {require('./../image/keyboard_arrow_left_24_px.png')} />
            </View>
            <View style={styles.container2}> 
                <Image source = {require('./../image/header.png')} />
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffffff',
        flex: 2.3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 50
    },
})