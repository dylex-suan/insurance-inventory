import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

function SendButton(props) {
    return (
        <View style={styles.container}>
            <Button
                title="SEND"
                color="#FFFFFF"
                onPress={() => { console.log("Send") }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        width: "100%",
        backgroundColor: 'rgb(93, 95, 222)',
    }
})

export default SendButton;