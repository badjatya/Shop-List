import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

const InputContainer = props => (
    <View style={styles.inputContainer}>
        <TextInput style={styles.inputContainer} placeholder="Enter Item..." />
    </View>
)

const styles = StyleSheet.create({
    inputContainer: {},
});

// Input Container component

export default InputContainer;