import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>Shop List</Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
      backgroundColor: "#8ab6d6",
      padding: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      color: "white",
      fontSize: 22,
    },
});

export default Header;