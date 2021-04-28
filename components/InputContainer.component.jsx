import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

const InputContainer = props => (
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter Item..." />

        <TouchableOpacity style={styles.buttonContainer}>
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