import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useHistory } from 'react-router-native';
import { alignItems, fontSize } from 'styled-system';

function DisplayPhoto(props) {
    let history = useHistory();
    console.log("hello");
    // console.log(props.location.state.uri);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>You took a photo!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#42D0FF",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#000",
        fontSize: 30
    }
})

export default DisplayPhoto;