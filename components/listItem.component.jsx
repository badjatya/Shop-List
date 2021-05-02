import React from "react";
import { StyleSheet, View , Text, TouchableOpacity} from "react-native";

const ListItem = props => (
    <View style={styles.container}>
        {
            props.lists.map(item => (
                <TouchableOpacity style={styles.listContainer} key={Math.random()}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:40,
        marginTop:20,
    },
    listContainer:{

    }
});

export default ListItem;