import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import { useHistory } from 'react-router-native';
import { justifyContent } from 'styled-system';
import DisplayPossibleDirectories from '../components/DisplayPossibleDirectories';

function AddNewInventory(props) {
    let history = useHistory();

    // go back to home
    const pushToHome = () => {
        history.push('/');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.inventoryText}>
                    Inventory Area
                </Text>
                <DisplayPossibleDirectories text="Add New Inventory" directTo="/addNewInventory" />
                <DisplayPossibleDirectories text="Load Previous Inventories" directTo="/loadPreviousInventories" />
                <View style={styles.buttonGoBack}>
                    <Button
                        title="Return To Login"
                        color="#FFFFFF"
                        onPress={pushToHome} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#35A7FF",
        alignItems: "center",
        justifyContent: 'space-between'
        // justifyContent: "flex-end"
    },
    topContainer: {
        flex: 1
    },
    inventoryText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'center',
    },
    imageIcon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonGoBack: {
        marginTop: 30,
        backgroundColor: 'rgb(93, 95, 222)',
    }

})
export default AddNewInventory;