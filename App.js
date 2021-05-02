import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/header.component";
import InputContainer from "./components/InputContainer.component";
import ListItem from "./components/listItem.component";

export default function App() {
  const [inputData, setInputData] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <InputContainer inputData={inputData} setInputData={setInputData} />
      <ListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
