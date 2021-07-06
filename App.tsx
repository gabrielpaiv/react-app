import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

import LogoImg from './src/Assets/logo.png';

export default function App() {
  const spinAnim = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 20000,
      easing: Easing.linear,
      useNativeDriver: true
    })
  ).start();
  const spin = spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
  });

  return (
    <View style={styles.app}>
      <Animated.Image
        source={LogoImg}
        style={{height: 200, width: 225, transform: [{rotate: spin}]}}
      />
      <Text style={styles.text}>Edit App.tsx and save to reload.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginTop: 30,
  },
});
