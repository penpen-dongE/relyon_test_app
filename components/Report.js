import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, 
    FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'react-native' ; 
import Constants from 'expo-constants';

export default function Report() {

    const IMG = [
        {
            id:'0',
            img: require('./../image/0.jpg')
        },
        {
            id:'1',
            img: require('./../image/1.jpg')
        },
        {
            id:'2',
            img: require('./../image/2.jpg')
        },
        {
            id:'3',
            img: require('./../image/3.jpg')
        },
        {
            id:'4',
            img: require('./../image/4.jpg')
        },
        {
            id:'5',
            img: require('./../image/5.jpg')
        },
        {
            id:'6',
            img: require('./../image/6.jpg')
        },
    ]

    const Item = ({ img }) => {
        console.log(img);
        return(
            <SafeAreaView >
                <Image style={{ width: '100%', resizeMode:'contain' }}
                        source = {img} />
            </SafeAreaView>
        )
    }

    const renderItem = ({item}) => (
        <Item img={item.img} />
    )
    return (
        <View style={styles.container}>
            <FlatList
                style = {styles.flat}
                renderItem={renderItem}
                data={IMG}
                keyExtractor={item => item.id}
            />
            {/* <ScrollView style={styles.scroll}> */}
                {/* <View style={styles.content}> */}
                    {/* <Image 
                        style={{ width: '100%', resizeMode:'contain'}}
                        source = {IMG[0].img} />
                    <Image 
                        style={{ width: '100%', resizeMode:'contain'}}
                        source = {IMG[1].img} />
                    <Image 
                        style={{ width: '100%', resizeMode:'contain'}}
                        source = {IMG[2].img} />
                    <Image 
                        style={{ width: '100%', resizeMode:'contain'}}
                        source = {IMG[3].img} />
                    <Image 
                        style={{ width: '100%', resizeMode:'contain'}}
                        source = {IMG[4].img} />
                    <Image 
                        style={{ width: '100%', resizeMode:'contain'}}
                        source = {IMG[5].img} />
                    <Image 
                        style={{ width: '100%', resizeMode:'contain'}}
                        source = {IMG[6].img} /> */}
                {/* </View> */}
                
            {/* </ScrollView>     */}
        </View>     
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        
        // backgroundColor: '#ffffff',
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: Constants.statusBarHeight,
    },
    scroll: {
        // width: '90%',
        backgroundColor: 'yellow',
    },
    content: {
       
    },
    flat:{
        flex:1,
        // marginTop:15,
    },
});