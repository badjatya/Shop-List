import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

const InputContainer = props => (
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter Item..." />

        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.textButton} >+</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 30,
        marginVertical: 10,
        flexDirection:"row",
        
    },
    textInput :{
        width:"80%",
        
    }
});

// Input Container component

export default InputContainer;