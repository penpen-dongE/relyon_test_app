import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import Bottom from './picComponents/Bottom';
import { useRoute } from '@react-navigation/native';
import ConfirmModal from './ConfirmModal';


export default function TakePic(){
    const route = useRoute();
    // const token = route.params;
    // console.log(token.token);

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>검사지 촬영</Text>
            <Camera style={styles.camera} type={type} ref={ref => {this.camera = ref}} >
                <View style={styles.rect}>
                    <Text style={styles.text}>
                        사각형 꼭지점에 결과지를 맞춰주세요 !
                    </Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Bottom style={styles.bottom}></Bottom>
                </View>
                {/* 
                    <TouchableOpacity
                        style={styles.flipButton}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                        }}
                    >
                    <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                */}
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText:{
        flex:0.8,
        paddingTop:15,
        backgroundColor:"rgba(0,0,0,1)",
        textAlign:"center",
        fontSize:20,
        color:"white",
        fontWeight: "bold",
    },
    camera: {
        flex: 9,
    },
    rect: {
        flex:4,
        alignItems:"flex-end",
        marginTop:25,
        marginHorizontal: 10,
        borderWidth: 1.7,
        borderColor: "#f1237b",
        borderStyle: "solid"
      },
    text: {
        marginTop: 380,
        marginRight: 50,
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "center",
        color: "#f1237b"
    },
    bottomContainer: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    bottom: {
      flexDirection: 'row',
    },
    // flipButton: {
    //     flex: 0.1,
    //     alignSelf: 'flex-end',
    //     alignItems: 'center',
    //     backgroundColor: 'transparent',
    // },

  });