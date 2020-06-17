import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Settings({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is the settings screen</Text>
            <TouchableOpacity 
                style={{backgroundColor: "black", width: 100, height: 50, justifyContent: "center", alignItems: "center", margin: 10}}
                onPress={() => navigation.navigate("Game")}>
                <Text style ={{color: "white"}}>Continue to game</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    peg: {
        position: "absolute",
        backgroundColor: "brown",
    }
});
