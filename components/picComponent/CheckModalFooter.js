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
        flexDirection: "row",
    },

    cameraButton:{
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        width: 15,
        height: 55,
        backgroundColor: "#323c47"
        
    },
    nextButton:{
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: "center",  // 왜 버튼 안 텍스트위치 조정이 안될까?...
        width: 15,
        height: 55,
        backgroundColor: "#5635ef"
    },
    text:{
        flex:1,
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        color: "#ffffff"
    },
})