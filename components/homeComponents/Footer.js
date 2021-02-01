import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native' ; 

//onPress는 반영안함. merge 후 해당되는 홈/ 결과추가 컴포넌트에 네비게이션 해야함

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button}>
                <Image source = {require('./../../image/home_black_24_dp.png')} />
                <Text>홈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image source = {require('./../../image/camera_alt_black_24_dp.png')} /> 
                <Text>결과추가</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image source = {require('./../../image/person_black_24_dp.png')} />
                <Text>마이페이지</Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1.6,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        color: '#323c47',
        flex: 1
    }
})