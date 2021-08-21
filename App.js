import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './app/scenes/LandingPage';
import { NativeRouter, Route, Link } from 'react-router-native';
import HomePage from './app/scenes/HomePage';
import TakePictures from './app/scenes/TakePicture';
import AddNewInventory from './app/scenes/AddNewInventory';
import DisplayPhoto from './app/scenes/DisplayPhoto';

export default function App() {
  return (
    // <LandingPage />
    <NativeRouter>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/HomePage" component={HomePage} />
      <Route exact path="/addNewInventory" component={AddNewInventory} />
      <Route exact path="/takePictures" component={TakePictures} />
      <Route exact path="/displayPhoto" component={DisplayPhoto} />
    </NativeRouter>
    // <DisplayPhoto />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
