import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/header.component";
import InputContainer from "./components/InputContainer.component";
import ListItem from "./components/listItem.component";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <InputContainer />
      <ListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
