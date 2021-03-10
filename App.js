import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Touchable} from 'react-native';
import Input from './Input';
import Lish from './Lish';

export default function App() {
  return (
    <View style={styles.container} >
      <Input/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
