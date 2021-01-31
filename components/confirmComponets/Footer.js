import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.confirm}
                // onPress={}
            >
                <Text style={styles.confirmText}>확인</Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
    },
    confirm:{
        width:230,
        height:40,
        
        borderRadius:1.5,
        backgroundColor:"#5635ef",
        justifyContent:"center"
    },
    confirmText:{
        color:"#ffffff",
        fontSize:15,
        textAlign:"center",
    },
    
})