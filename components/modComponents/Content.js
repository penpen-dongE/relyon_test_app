import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,
    FlatList, TextInput, SafeAreaView} from "react-native";

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

    const Item = ({ title, data }) => {
        console.log(title);
        const [value, onChangeText] = useState('') ;
        return (
        <SafeAreaView style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.inputText}
                onChangeText={text => onChangeText(text)}
                placeholder={data}
                placeholderTextColor={'#f1237b'}
                value={value}

            />
            {
                title === 'EGPR'
                ?   <TouchableOpacity style={styles.confirm}>
                        <Text style={styles.confirmText}>확인</Text>
                    </TouchableOpacity>
                : null
            }
        </SafeAreaView>
    )}

    <TouchableOpacity style={styles.confirm}>
    <Text style={styles.confirmText}>확인</Text>
    </TouchableOpacity>

    const renderItem = ({ item }) => (        
        <Item title={item.title} data={item.data} />
    
    )

    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.titleText1}>* 인식한 값</Text>
                <Text style={styles.titleText2}>이 틀린 경우 직접 입력해주세요.</Text>
            </View>
            <View style={styles.flatContainer}>
                <FlatList 
                    style = {styles.flat}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
                {/* <TouchableOpacity style={styles.confirm}>
                    <Text style={styles.confirmText}>확인</Text>
                </TouchableOpacity> */}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginTop:13,
        flexDirection:"column",
        backgroundColor: "#f6f6f9",
        justifyContent: "center",
        alignItems:"center",
    },
    textContainer:{
        flex:0.3,
        flexDirection:"row",
    },
    flatContainer:{
        flex:2.5,
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
        flex:1,
        marginTop:15,
    },
    item:{
        marginRight:5,
    },
    title:{
        fontSize: 17,
        fontWeight:"bold",  
        color:"#262626",     
    },
    inputText:{
        width:245,
        height:30,
        borderRadius:1.3,
        marginTop:10,
        marginBottom:15,
        backgroundColor:"#fdfdfd",
        borderStyle:"solid",
        borderWidth:0.3,
        borderColor:"#323c47",
    },
    confirm:{
        width:230,
        height:40,
        marginTop:5,
        marginLeft:8,
        borderRadius:1.5,
        backgroundColor:"#5635ef",
        justifyContent:"center"
    },
    confirmText:{
        color:"#ffffff",
        fontSize:15,
        textAlign:"center",
    },

})