import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} 
    from "react-native";

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/goodspace.gif')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Image source={require("../assets/carpet.png")} style={{ width: 100, height: 100 }}></Image>
                        <Text style={styles.titleText}>Carpet Surfer</Text>   
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Surfer")}>
                        <Text style={styles.routeText}>Start</Text>
                    </TouchableOpacity>
                      
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
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 80,
        marginRight: 80,
        borderRadius: 100,
        backgroundColor: "white", 
        marginTop: 250
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 80,
        width: 80,
        resizeMode: "contain"
    }
});