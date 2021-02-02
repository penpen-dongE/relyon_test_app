import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native' ; 

export default function Content() {
    const navigation = useNavigation();

    const [key, setKey] = useState(1);
    const [list, setList] = useState({
        img: require('./../../image/basetext.png') 
    });
    
    const onPress = () => setList({
        img: require('./../../image/4930.png')
    });
    console.log(list.img);
    // console.log("키값 바뀌었나? : " + key);

    return (
        <View style={styles.content}>
            <View style={styles.container}>
                <Text style={styles.text}>검사 결과 리스트</Text>
            </View>
            <View style={styles.container2}>
                <Image 
                    style={{height:'100%',width:'45%',resizeMode:'contain'}}
                    source = {require('./../../image/4851.png')} />
            </View>
            <View style={styles.listContainer}>
            {
                list.img === 20 &&
                   <Image 
                        style={{width:'100%', resizeMode:'contain'}}
                        source={list.img}/>
            }
            {        
                list.img === 26 &&   
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{navigation.navigate('Report')}}>
                        <Image 
                            style={{ marginTop:-180, width:320, resizeMode:'contain'}}
                            source={list.img}/>
                    </ TouchableOpacity>
                    //<Image
                    // style={{width:'100%', resizeMode:'contain'}}
                    // source={list.img}/>    
            }    
            </View>                      
            {
                key === 1
                ?   <TouchableOpacity style={styles.button}
                        onPress={()=>{onPress, setKey(2),
                            setList({img: require('./../../image/4930.png')}),
                            navigation.navigate('TakePic')}}>
                        <Image 
                            style={{height:'100%',width:'100%',resizeMode:'contain'}} 
                            source = {require('./../../image/4921.png')} />
                    </TouchableOpacity>
                    
                :   <TouchableOpacity style={styles.button} // 네비게이션 고쳐야함
                        onPress={()=>{navigation.navigate('TakePic')}}
                        >
                        <Image 
                            style={{height:'100%',width:'100%',resizeMode:'contain'}} 
                            source = {require('./../../image/4921.png')} />
                    </TouchableOpacity>
            }
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