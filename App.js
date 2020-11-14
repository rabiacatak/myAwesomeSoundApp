import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstSoundPage from "./pages/FirstSoundPage/FirstSoundPage";

export default function App() {
  return (
    <View style={styles.container}>
      <FirstSoundPage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#C5E2F6',
    borderWidth: 1,
    marginTop: 66,
  },
});
