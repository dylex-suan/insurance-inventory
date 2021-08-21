import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import { borderStyle } from 'styled-system';

function DisplayPossibleDirectories(props) {
    let history = useHistory();

    const ADDNEW = "/addNewInventory";
    const LOADPREVIOUS = "/loadPreviousInventories";

    const determinePath = (link) => {
        if (link === ADDNEW) {
            console.log(ADDNEW)
            const getName = Alert.alert("Name of Inventory", "Please enter the name of the inventory in the text-field below.")
        } else if (link === LOADPREVIOUS) {
            console.log(LOADPREVIOUS)
        }
    }

    return (
        <View style={styles.rectangle}>
            <View style={styles.text}>
                <Button title={props.text} color="white" onPress={() => determinePath(props.directTo)} />
            </View>
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
        textAlign: "center",
        alignItems: "center"
    }
})
export default DisplayPossibleDirectories;