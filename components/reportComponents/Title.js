import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//공유 아이콘 넣아야 함

export default function Title() {
    return (
        <View style={styles.header}>
            <Text style={styles.dateText}>2019.12.09</Text>
            <Text style={styles.nameText}>조직 검사</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.15,
        flexDirection:"column",
        backgroundColor: "#ffffff",
        justifyContent: "center",
    },
    dateText:{
        color:"#323c47",
        fontSize:21,
        marginLeft:15,
        textAlign:"left",
    },
    nameText:{
        marginTop:15,
        marginLeft:15,
        color:"#323c47",
        fontSize:25,
        fontWeight: "bold",
        textAlign: "left",
    },
})