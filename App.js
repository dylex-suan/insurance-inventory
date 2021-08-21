import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './app/scenes/LandingPage';
import { NativeRouter, Route, Link } from 'react-router-native';
import AddNewInventory from './app/scenes/AddNewInventory';
export default function App() {
  return (
    // <LandingPage />
    <NativeRouter>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/AddNewInventory" component={AddNewInventory} />
    </NativeRouter>
    
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
