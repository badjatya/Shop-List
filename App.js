import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/header.component";
import InputContainer from "./components/InputContainer.component";
import ListItem from "./components/listItem.component";

export default function App() {
  const [inputData, setInputData] = useState("");
  const [lists, setLists] = useState([]);

  return (
    <View style={styles.container}>
      <Header />
      <InputContainer
        inputData={inputData}
        setInputData={setInputData}
        lists={lists}
        setLists={setLists}
      />
      <ListItem lists={lists} setLists={setLists} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
