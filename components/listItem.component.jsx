import React from "react";
import { StyleSheet, ScrollView , Text, TouchableOpacity} from "react-native";

const ListItem = props => (
    <ScrollView  style={styles.container}>
        {
            props.lists.map(item => (
                <TouchableOpacity style={styles.listContainer} key={Math.random()}>
                    <Text>{item.list}</Text>
                </TouchableOpacity>
            ))
        }
    </ScrollView>
)

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