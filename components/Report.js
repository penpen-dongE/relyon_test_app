import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import { Image } from 'react-native' ; 


export default function Report() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Image 
                    style={{ width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/report.png')} />
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
        backgroundColor: 'green',
    },

});
