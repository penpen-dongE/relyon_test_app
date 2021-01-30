import React,{ useState } from 'react';
import { StyleSheet, View, Modal } from "react-native";
import Header from './confirmComponets/Header';
import Content from './confirmComponets/Content';
import Footer from './confirmComponets/Footer';
import { useRoute } from '@react-navigation/native';

export default function ConfirmModal(props){
    const route = useRoute();
    const token = route.params;
    console.log("라우트 파람 토큰"+token.token);
    const [visible, setVisible] = useState(token.token);

    return(
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <Header />
                <Content />
                <Footer />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        borderRadius: 3.3,
    }
})