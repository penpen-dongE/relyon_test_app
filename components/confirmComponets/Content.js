import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Content() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>촬영한 검사는 결과분석에 3분 소요됩니다.</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        marginTop:155,
        flexDirection:"row",
        justifyContent: "center",
    },
    text:{
        color:"#332121",
        fontSize:14,
        fontWeight: "bold",
        textAlign: "center",
    },
    
})