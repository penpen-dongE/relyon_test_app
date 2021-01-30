import React from "react";
import { 
    StyleSheet, 
    View ,
    Text,
    TouchableOpacity,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

export default function CheckModalFooter(props){
    
    const navigation = useNavigation();
    // console.log("Modal Footer - 프롭스 이미지 넘어옴? "+props.image); //image.uri 넘어옴
    return(

        <View style={styles.container}>
            <TouchableOpacity style={styles.cameraButton}
                onPress={()=> {navigation.navigate('TakePic')
                    props.modalVisible(false)
                }}
            >
                <Text style={styles.text}>다시 촬영</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton}
                image = {props.image}
                onPress={() => {navigation.navigate('ModifyInfo',{image : props.image})
                    props.modalVisible(false)} }
            >
                <Text style={styles.text}>다음</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 55,
        flexDirection: "row",
        justifyContent: "space-around"
    },

    cameraButton:{
        flex:0.45,
        marginRight:10,
        justifyContent: "center",
        width: 100,
        height: 50,
        backgroundColor: "#323c47"
        
    },
    nextButton:{
        flex:0.45,
        marginLeft:10,
        justifyContent: "center",  
        width: 100,
        height: 50,
        backgroundColor: "#5635ef"
    },
    text:{
        fontSize: 13.5,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff"
    },
})