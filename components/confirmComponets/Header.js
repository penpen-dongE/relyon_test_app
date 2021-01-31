import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>전송 완료</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection:"row",
        backgroundColor: "#ffffff",
        justifyContent: "center",
    },
    text:{
        marginTop:25,
        color:"#323c47",
        fontSize:23,
        fontWeight: "bold",
        textAlign: "center",
    },
})