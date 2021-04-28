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
});
