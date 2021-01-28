import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native' ; 

export default function Content() {
    const [list, setList] = useState({
        img: require('./../image/basetext.png') 
    });
    
    const onPress = () => setList({
        img: require('./../image/4930.png')   
    })
    console.log(list)

    return (
        <View style={styles.content}>
            <View style={styles.container}>
                <Text style={styles.text}>검사 결과 리스트</Text>
            </View>
            <View style={styles.container2}>
                <Image 
                    style={{height:'100%',width:'45%',resizeMode:'contain'}}
                    source = {require('./../image/4851.png')} />
            </View>
            <View style={styles.listContainer}>
                <Image 
                    style={{width:'100%',resizeMode:'contain'}}
                    source={list.img}/>
            </View>                      
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image 
                    style={{height:'100%',width:'100%',resizeMode:'contain'}} 
                    source = {require('./../image/4921.png')} />
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 14,
        justifyContent: 'center',
        width: '85%',
        backgroundColor: '#f6f6f9'
    },
    container:{
        justifyContent: 'flex-end',
        flex: 1,
    },
    text: {
        fontSize: 18,
        color: '#323c47',
        fontWeight: 'bold'
    },
    container2: {
        flex:0.5,
        alignItems: 'flex-end',
    },
    listContainer: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10
    },
    baseText: {
        fontSize: 12,
        alignItems: 'center',
        color: '#323c47'
    },
    button: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})