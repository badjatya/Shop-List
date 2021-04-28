import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header.component";
import InputContainer from "./components/InputContainer.component";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
