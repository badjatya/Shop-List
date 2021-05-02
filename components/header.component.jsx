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
      paddingHorizontal: 30,
      paddingTop: 60,
      paddingBottom: 35,
      justifyContent: "center",
      alignItems: "center",
      marginBottom:15,
    },
    headerText: {
      color: "white",
      fontSize: 22,
    },
});

export default Header;