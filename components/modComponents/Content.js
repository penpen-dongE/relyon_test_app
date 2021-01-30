import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,
    FlatList, TextInput, ScrollView } from "react-native";

export default function Content(props) {

    const DATA = [
        {
            id:'1',
            title:'Estrogen Receptor',
            data:'Positive ( > 2/3 )',
        },
        {
            id:'2',
            title:'Progesteron Receptor',
            data:'Positive ( > 2/3 )',
        },
        {
            id:'3',
            title:'P53',
            data:'Negative (<5% of tumor cells)',
        },
        {
            id:'4',
            title:'Her-2',
            data:'Negative (1+)',
        },
        {
            id:'5',
            title:'Ki-67',
            data:'Positive(1+, 15-20%)',
        },
        {
            id:'6',
            title:'CK5/6',
            data:'Negative',
        },
        {
            id:'7',
            title:'EGPR',
            data:'Negative',
        },
    ]
    // console.log(DATA[0].data);
    // console.log(DATA);  
     
    const Item = ({ data, title }) => {
        console.log(data);
        
        // console.log(data === undefined);
        // console.log(title)
        const [value, onChangeText] = useState('') ;
        return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.inputText}
                onChangeText={text => onChangeText(text)}
                placeholder={data}
                value={value}
            />
        </View>
    )}

    const renderItem = ({ item }) => (        
        <Item title={item.title} />
        
    )

    // const ITEM_HEIGHT = 5;
    // const getItemLayout = useCallback(
    //     (data, index) => ({
    //         length: ITEM_HEIGHT,
    //         offset: ITEM_HEIGHT * index,
    //         index,    
    //     }), 
    //     []
    // );

    return(
        <View style={styles.container}>
            <Text style={styles.titleText1}>* 인식한 값</Text>
            <Text style={styles.titleText2}>이 틀린 경우 직접 입력해주세요.</Text>
            <FlatList 
                style = {styles.flat}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                // getItemLayout={getItemLayout}
            />
            <TouchableOpacity style={styles.confirm}>
                <Text style={styles.confirmText}>확인</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginTop:13,
        flexDirection:"row",
        backgroundColor: "#f6f6f9",
        justifyContent: "center",
    },
    titleText1: {
        fontSize:15,
        fontWeight:"bold",
        color:"#f1237b",
    },
    titleText2: {
        fontSize:15,
        color:"#323c47",
    },
    flat:{
        position:"absolute",
        marginTop:30,
        marginRight:50,
    },
    item:{

    },
    title:{
        fontSize: 17,
        fontWeight:"bold",       
    },
    inputText:{
        borderRadius:1.3,
        marginTop:10,
        backgroundColor:"#fdfdfd",
        borderStyle:"solid",
        borderWidth:0.3,
        borderColor:"#323c47",
    },
    confirm:{
        position:"absolute",
        marginTop:320,
        backgroundColor:"#5635ef",
    },
    confirmText:{
        color:"#ffffff",
        fontSize:15,

    }

})