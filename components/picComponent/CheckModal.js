// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { 
    StyleSheet, 
    View ,
    Text,
    Modal,
    StatusBar, Image
  } from 'react-native';

// import { Modal, ModalButton, ModalContent, ModalFooter, ModalTitle } from 'react-native-modals'; // 모달 임포트
import CheckModalFooter from "./CheckModalFooter";

export default function CheckModal(props){
    console.log("프롭스로 넘어온 테스트 이미지 값 : "+props.image);
    // console.log("props로 넘어온 visible 확인 : "+ props.visible); 

    // useEffect(()=>{
    //     console.log('useEffect 실행 -> 모달 visible 바꿀꺼야');
    //     return()=>{
    //       console.log('모달 visible false로 바꾸기');
    //       setModalVisible(false);
    //       console.log('modalvisible flase?? : '+ modalVisible);
    //     };
    //   });

    const [modalVisible, setModalVisible] = useState(props.visible);
    
    if(props.key === true){
        setModalVisible(props.visible);
        // console.log("key가 존재할 때, modalVisivle 확인 : "+ modalVisible);
    }
    
    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Modal
                
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style = {styles.headertext}>촬영 결과</Text>
                        <Text style = {{marginTop:8}}>글자가 또렷하게 보였는지 확인해주세요</Text>
      
                        {props.image && <Image source={{ uri: props.image }} 
                            style={{ resizeMode:"contain", borderColor:"#5635ef", 
                                borderWidth:1,
                                marginTop:35, width: 200, height: 270 }} />}
                        <CheckModalFooter modalVisible={setModalVisible}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
} 

const styles= StyleSheet.create({
    container:{
        flex:1,
        marginTop: 20,
        borderRadius: 3.3,
    },
    centeredView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(50, 60, 71, 0.85)',
    },
    modalView:{
        // flex:1,
        backgroundColor: "white",
        width: 330,
        height: 510,
        borderRadius: 20,
        alignItems: "center",
    },
    headertext:{
        marginTop:25,
        fontFamily: "Roboto",
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        color: "#323c47"
    },
})




    