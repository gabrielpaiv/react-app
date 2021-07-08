import React from 'react';

import {
    Animated,
    View,
    Easing
} from 'react-native';

import { styles } from './styles';

export function Fire() {
    const flickerAnim = new Animated.Value(0);
    Animated.loop(
        Animated.timing(flickerAnim, {
            toValue: 10,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true
        })
    ).start();
    const flickerRotation = flickerAnim.interpolate({
        inputRange: [0,2,4,6,8,10],
        outputRange: ['-1deg','2deg','-1deg','1deg','-1deg','1deg']
    });
    const flickerScale = flickerAnim.interpolate({
        inputRange: [0,2,4,6,8,10],
        outputRange: ['1','1.05','1','1','0.90','1']
    });
    const flickerLight = flickerAnim.interpolate({
        inputRange: [0,2,4,6,8,10],
        outputRange: ['1','1.05','1','1','0.90','1']
    });
    return (
        <Animated.View style={[styles.flameWrapper, {transform:[{rotate: flickerRotation, scaleY: flickerScale}]}]}>
            <View style={[styles.flame, styles.red]} />
            <View style={[styles.flame, styles.orange]} />
            <View style={[styles.flame, styles.gold]} />
            <View style={[styles.flame, styles.white]} />
        </Animated.View>
    );
}