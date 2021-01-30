import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Content() {
    return (
        <View style={styles.header}>
            <Text>촬영한 검사는 결과분석에 3분 소요됩니다.</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        flexDirection:"row",
        backgroundColor: "#f6f6f9",
        justifyContent: "center",
    },
    
})