import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//추후 style.innertext는 DB에서 사용자 이름 가져옴 + 현재 날짜 받아오는 기능 추가

export default function Title() {
    return (
        <View style={styles.title}>
            <View style={styles.container1}>
                <Text style={styles.text1}>환</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text2}>안녕하세요!  
                    <Text style={styles.innertext}> 홍길순</Text> 님!
                </Text>
                <Text>오늘은  
                    <Text style={styles.innertext}> 2021.02.03</Text> 입니다.
                </Text>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    title: {
        flex: 3.5,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '85%',
        shadowColor: '#1a000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingBottom: 10
    },
    container1: {
        backgroundColor: '#5635ef',
        borderRadius: 50,
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        color: '#ffffff',
        fontSize: 25
    }
    ,
    container2: {
        alignItems: 'flex-end',
        paddingLeft: 20
    },
    text2: {
        fontSize: 20,
    },
    innertext: {
        fontWeight: 'bold'
    }
})