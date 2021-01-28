import React from "react";
import { 
    StyleSheet, 
    View ,
    Text,
    TouchableOpacity,
    Modal
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

export default function CheckModalFooter(props){
    const navigation = useNavigation();

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
                onPress={() => {navigation.navigate('ModifyInfo')
                    props.modalVisible(false)}}
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
        fontFamily: "Roboto",
        fontSize: 13.5,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff"
    },
})