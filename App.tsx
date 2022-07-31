import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import Header from './src/components/Header';
import CarsList from './src/components/CarList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList/>

      
      <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
  },

});
