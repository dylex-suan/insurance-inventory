import { AutoFocus } from 'expo-camera/build/Camera.types';
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useHistory } from 'react-router-native';

function DisplayRooms(props) {
    let history = useHistory();

    const goToTakePictures = (location) => {
        history.push("/takePictures", { locationOfImage: location });
    }

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Button
                    title={`Add Photos To ${props.name}`}
                    color="#000"
                    // when pressed, direct the user to the image
                    onPress={() => goToTakePictures(props.name)}>
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        width: "100%"
    },
    text: {
        fontSize: 30,
        fontWeight: "300",
        width: "100%",
        backgroundColor: "#42D0FF"
    }
})
export default DisplayRooms;