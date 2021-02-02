import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native' ; 

export default function Footer() {
    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button}
                onPress={()=>{navigation.navigate('Home')}}>
                <Image style={{marginBottom:-3.5}} source = {require('./../../image/home_black_24_dp.png')} />
                <Text style={styles.text}>홈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={()=>{navigation.navigate('TakePic')}}>
                <Image source = {require('./../../image/camera_alt_black_24_dp.png')} /> 
                <Text style={styles.text}>결과추가</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image source = {require('./../../image/person_black_24_dp.png')} />
                <Text style={styles.text}>마이페이지</Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.13,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        color: '#323c47',
    },
    text:{
        color:'#323c47',
    },
})