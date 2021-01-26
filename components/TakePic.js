import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import Bottom from './picComponent/Bottom';


export default function TakePic( { navigation } ){
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
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    flipButton: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    rect: {
        flex:1,
        width: 330,
        height: 460,
        position: "absolute",
        left: 15,
        top: 10,
        borderWidth: 1.5,
        borderColor: "#f1237b",
        borderStyle: "solid"
      },
    text: {
        marginTop: 410,
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "center",
        color: "#f1237b"
    },
    bottomContainer: {
      flex:1,
      width: 360,
      height: 75,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    bottom: {
      flex:1,
      height: 75,
      width: 360,
      flexDirection: 'row',
    }

  });