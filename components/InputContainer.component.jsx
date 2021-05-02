import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

const InputContainer = props => (
    <View style={styles.inputContainer}>
        <TextInput value={props.inputData} style={styles.textInput} placeholder="Enter Item..." onChangeText={(item) => props.setInputData(item)} />

        <TouchableOpacity 
        onPress={() => props.setLists([...props.lists,props.inputData])} 
        style={styles.buttonContainer}>
            <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 30,
        marginVertical: 10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
    },
    textInput :{
        width:"80%",
        paddingTop:15,
        borderBottomColor: "#8ab6d6",
        borderBottomWidth:1,
    },
    buttonContainer:{
        width:40,
        height:40,
        borderRadius:40,
        borderColor: "#8ab6d6",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center"
    },
    textButton:{
        fontSize:16,
        fontWeight:"bold",
        color: "#8ab6d6",
    }
});

export default InputContainer;