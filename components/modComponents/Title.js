import React from 'react';
import { StyleSheet, Image, View } from 'react-native';



export default function Title(props) {
    // console.log("ModiInfo Title - 프롭스로 넘어온 테스트 이미지 값 : "+props.image);
    const image = props.image;
    const imageUri = image.replace(/\"/g,"");
    // console.log("imageUri 따옴표 제거 : "+imageUri);

    return (
        <View style={styles.title}>
            {props.image && 
                <Image source={{ uri: imageUri }} 
                    style={styles.image}
                />
            }
        </View> 
    )
}

const styles = StyleSheet.create({
    title: {
        flex: 3,
        flexDirection:"row",
        backgroundColor: "#f6f6f9",
        justifyContent: "center",
        bottom:20,
    },
    image:{
        resizeMode:"contain" , 
        borderColor:"#323c47", 
        borderWidth:1,
        width: 190, 
        height: 260,
    },
})