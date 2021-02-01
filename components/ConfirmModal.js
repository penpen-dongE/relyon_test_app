import React,{ useState } from 'react';
import { StyleSheet, View, Modal } from "react-native";
import Header from './confirmComponets/Header';
import Content from './confirmComponets/Content';
import Footer from './confirmComponets/Footer';
import { useRoute } from '@react-navigation/native';

export default function ConfirmModal(props){
    const route = useRoute();
    const token = route.params;
    // console.log("라우트 파람 토큰"+token.token);

    const [visible, setVisible] = useState(token.token);

    return(
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Header />
                        <Content />
                        <Footer 
                        visible={setVisible} 
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    
})