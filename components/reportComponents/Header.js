import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Header() {
    return (
        <View style={styles.header}>
            <AntDesign style={styles.icon}
                name="left" size={20} color="#454545" />
            <Text style={styles.text}>조직검사 결과지 번역</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.12,
        flexDirection:"row",
        backgroundColor: "#ffffff",
        justifyContent: "center",
    },
    icon:{
        marginTop:19,
        marginRight: 300,
    },
    text:{
        marginTop:15,
        position:"absolute",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#454545"
    },
})