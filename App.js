import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header.component";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
