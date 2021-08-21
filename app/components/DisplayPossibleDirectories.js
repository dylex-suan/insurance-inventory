import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { borderStyle } from 'styled-system';

function DisplayPossibleDirectories(props) {
    return (
        <View style={styles.rectangle}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rectangle: {
        height: 50,
        backgroundColor: "#EF5B5B",
        borderStyle: "solid",
        marginBottom: 30,
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        lineHeight: 50,
        color: "#FFFFFF",
        textAlign: "center"
    }
})
export default DisplayPossibleDirectories;