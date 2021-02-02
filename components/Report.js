import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, 
    FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'react-native' ; 
import { Dimensions } from 'react-native';
import Header from './reportComponents/Header';
import Title from './reportComponents/Title';
import Footer from './reportComponents/Footer';

export default function Report() {

    // const IMG = [
    //     {
    //         id:'0',
    //         img: require('./../image/1.jpg')
    //     },
    //     {
    //         id:'1',
    //         img: require('./../image/2.jpg')
    //     },
    //     {
    //         id:'2',
    //         img: require('./../image/3.jpg')
    //     },
    //     {
    //         id:'3',
    //         img: require('./../image/4.jpg')
    //     },
    //     {
    //         id:'4',
    //         img: require('./../image/4.jpg')
    //     },
    //     {
    //         id:'5',
    //         img: require('./../image/5.jpg')
    //     },
    //     {
    //         id:'6',
    //         img: require('./../image/6.jpg')
    //     },
    // ]

    // const Item = ({ img }) => {
    //     console.log(img);
    //     return(
    //         <SafeAreaView >
    //             <Image style={{ width: '100%', resizeMode:'contain' }}
    //                     source = {img} />
    //         </SafeAreaView>
    //     )
    // }

    // const renderItem = ({item}) => (
    //     <Item img={item.img} />
    // )

    const dimensions = Dimensions.get('window');
    const imageHeight = dimensions.width * 2.1;
    const imageHeight1 = dimensions.width * 1.6;
    const imageHeight2 = dimensions.width * 1.4;    
    const imageHeight3 = dimensions.width * 2.6; 

    return (
        <View style={styles.container}>
            <Header />
            <Title />
            {/* <View style={styles.flatContainer}>
                <FlatList
                    style = {styles.flat}
                    renderItem={renderItem}
                    data={IMG}
                    keyExtractor={item => item.id}
                    
                    // ItemSeparatorComponent={()=>(       // 아이템 사이의 간격을 주기위한 속성
                    //     <View style={{marginTop:-50}}/>
                    // )}
                />
            </View> */}
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scroll}>
                    <Image 
                    style={{ height: imageHeight, width: '100%', resizeMode: 'stretch'}}
                    source = {require('./../image/0.jpg')} />
                    <Image 
                    style={{ height: imageHeight1, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/1.jpg')} />  
                    <Image 
                    style={{ height: imageHeight2, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/2.jpg')} />  
                    <Image 
                    style={{ height: imageHeight, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/3.jpg')} /> 
                    <Image 
                    style={{ height: imageHeight3, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/4.jpg')} />   
                    <Image 
                    style={{ height: imageHeight3, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/5.jpg')} /> 
                    <Image 
                    style={{ height: imageHeight, width: '100%', resizeMode:'stretch'}}
                    source = {require('./../image/6.jpg')} />       
                </ScrollView> 
            </SafeAreaView> 
            <Footer />
        </View>     
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 15,
        // width: '100%',
        backgroundColor: 'yellow',
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: Constants.statusBarHeight,
    },
    scrollContainer:{
        flex:1,
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatContainer:{
        flex:1,
        justifyContent: "center",
    },
    scroll: {
        width: '90%',
        backgroundColor: 'yellow',
    },
    content: {
       
    },
    flat:{
        flex:1,
        // marginTop:15,
    },
});