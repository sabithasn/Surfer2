import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {View, Animated, StyleSheet, Text,  SafeAreaView,
    TouchableOpacity,
    Platform,
    ImageBackground,
    Image } from 'react-native';
export default class PanGesture extends Component {
  translateX = new Animated.Value(0);
  translateY = new Animated.Value(0);
  onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: this.translateX,
          translationY: this.translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground source={require('../assets/goodspace.gif')} style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Carpet Surfer</Text>
          </View>   
        <PanGestureHandler onGestureEvent={this.onPanGestureEvent}>
          <Animated.Image source= {require ('../assets/carpet.gif')}
            style={[
              styles.square,
              {
                transform: [
                  {
                    translateX: this.translateX,
                  },
                  {
                    translateY: this.translateY,
                  },
                ],
              },
            ]}
          />
        </PanGestureHandler>
        <StatusBar style="auto" />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
   container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    
    titleBar: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "gold"
    },
    square: {
    width: 150,
    height: 150,
    alignSelf:'center',
    marginTop: 220,
  }

});