import React, { useState } from 'react';
import { NativeBaseProvider, Box, keyboardDismissHandlerManager } from 'native-base';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { style } from 'styled-system';
import { useHistory } from 'react-router-native';
// import { Button } from 'react-native-elements';s

function LandingPage() {
    const [username, onChangeUsername] = useState("")
    const [password, onChangePassword] = useState("")
    let history = useHistory();
    const onLoginPress = () => {
        history.push("/HomePage");
    }
    const onRegisterPress = () => {

    }

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Insurance App</Text>
                        <TextInput placeholder="Username" onChangeText={onChangeUsername} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                        <TextInput placeholder="Password" onChangeText={onChangePassword} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                        <View style={style.bringToBottom}>
                            <View style={styles.loginButton}>
                                <Button
                                    color="#FFFFFF"
                                    onPress={() => onLoginPress()}
                                    title="LOGIN"
                                />
                            </View>
                            <View style={styles.registerButton}>
                                <Button
                                    color="#FFFFFF"
                                    onPress={() => onRegisterPress()}
                                    title="REGISTER"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: "#35A7FF"
    },
    loginScreenContainer: {
        flex: 1,
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
    },
    loginFormView: {
        flex: 1
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,

    },
    // button: {
    //     alignItems: 'center',
    //     backgroundColor: 'rgb(93, 95, 222)',
    //     borderRadius: 8,
    //     top: 50,
    //     height: 70,
    //     justifyContent: 'center',
    // },
    bringToBottom: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginButton: {
        backgroundColor: 'rgb(93, 95, 222)',
        fontSize: 70,
        height: 70,
        fontWeight: '600',
        lineHeight: 22,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40%"
    },
    registerButton: {
        backgroundColor: '#FF5964',
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "auto"
    }
})
export default LandingPage;