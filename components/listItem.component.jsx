import React, { useState } from "react";
import { StyleSheet, ScrollView , Text, TouchableOpacity,FlatList} from "react-native";
import uuid from 'react-native-uuid';

const ListItem = props => {
    return(
    <ScrollView  style={styles.container}>
        {
            props.lists.map(item => (
                <TouchableOpacity style={styles.listContainer} key={uuid.v4()}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            ))
        }

    </ScrollView>
)}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:40,
        marginTop:20,
    },
    listContainer:{
        borderColor:"#8ab6d6",
        borderStyle:"dashed",
        paddingVertical: 10,
        paddingLeft: 25,
        borderStyle: "dashed",
        borderRadius: 3,
        borderWidth: 2,
        marginBottom:10,
    }
});

export default ListItem;