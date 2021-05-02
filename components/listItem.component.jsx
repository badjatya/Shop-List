import React from "react";
import { StyleSheet, View , Text, TouchableOpacity} from "react-native";

const ListItem = props => (
    <View style={styles.container}>
        {
            props.lists.map(item => (
                <Text key={Math.random()}>{item}</Text>
            ))
        }
    </View>
)

const styles = StyleSheet.create({
    container: {},
});

export default ListItem;