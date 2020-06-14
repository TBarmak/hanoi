import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game'

export default function App() {
  return (
    <Game />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
