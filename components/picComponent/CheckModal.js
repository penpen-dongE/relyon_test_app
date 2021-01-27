import React, { useState, setState } from "react";
import { 
    StyleSheet, 
    View ,
    Text,
    Modal
  } from 'react-native';

// import { Modal, ModalButton, ModalContent, ModalFooter, ModalTitle } from 'react-native-modals'; // 모달 임포트
import CheckModalFooter from "./CheckModalFooter";

export default function CheckModal(props, {navigation}){

    // console.log("props로 넘어온 visible 확인 : "+ props.visible); 
    const [modalVisible, setModalVisible] = useState(props.visible);
    
    if(props.key === true){
        setModalVisible(props.visible);
        console.log("key가 존재할 때, modalVisivle 확인 : "+ modalVisible);
    }
    

    return(
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style = {styles.headertext}>촬영 결과</Text>
                        <Text>글자가 또렷하게 보였는지 확인해주세요</Text>
                        <Text>이미지 불러오는 뷰? 화면? 필요</Text>
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
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: 123,
        height: 160,
        borderRadius: 3.3,
        backgroundColor: "#ffffff"
    },
    centeredView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    modalView:{
        flex:1,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    headertext:{
        // flex:1,
        width: 100,
        height: 40,
        fontFamily: "Roboto",
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        color: "#323c47"
    },
})




    