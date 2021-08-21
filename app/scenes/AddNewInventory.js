import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, SafeAreaView, View, Text, ScrollView, Button } from 'react-native';
import { BackButton, useHistory } from 'react-router-native';
import DisplayRooms from '../components/DisplayRooms';

import SendButton from '../components/SendButton';

function AddNewInventory(props) {
    let history = useHistory();

    const goBackToHome = () => {
        history.push('/HomePage')
    }
    // will need to load current rooms that are already preset, and then add more rooms if the user so chooses
    const roomsPreset = [
        { name: "Living Room", },
        { name: "Kitchen" },
        { name: "Master Bedroom" },
        { name: "Basement" },
        { name: "Attic" }
    ]

    return (
        <SafeAreaView style={styles.outerContainer}>
            {/* if you put the following View in a component, it doesn't work, will need to figure this out */}
            <View style={{
                backgroundColor: "turquoise",
                width: "100%"
            }}>
                <Button
                    title="Go Back"
                    color="#000"
                    onPress={goBackToHome} />
            </View>
            <Text style={styles.inventoryText}>New Inventory: {props.location.state.newInventoryName}</Text>
            <View style={{ height: "60%", width: "100%", alignItems: 'center' }}>
                <ScrollView style={styles.scrollView}>
                    <View style={{
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                        {roomsPreset.map(function (d, value) {
                            return (
                                <DisplayRooms name={d.name} key={value} />
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
            <SendButton />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: "#35A7FF",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    inventoryText: {
        fontSize: 30,
        fontWeight: "800",
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'center',
    },
    scrollView: {
        width: "90%",
        backgroundColor: "lightblue",
    },
    rectangle: {
        height: 250,
        width: 250,
        marginBottom: 5,
        backgroundColor: "red"
    },
})
export default AddNewInventory;