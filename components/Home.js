import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ backgroundColor: "black", width: 200, height: 50, justifyContent: "center", alignItems: "center", margin: 10 }}
                onPress={() => navigation.navigate("Settings")}>
                <Text style={{ color: "white" }}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: "black", width: 200, height: 50, justifyContent: "center", alignItems: "center", margin: 10 }}
                onPress={() => navigation.navigate("Game", { tutorial: true, number: 3 })}>
                <Text style={{ color: "white" }}>Tutorial</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: "black", width: 200, height: 50, justifyContent: "center", alignItems: "center", margin: 10 }}
                onPress={() => navigation.navigate("Achievements")}>
                <Text style={{ color: "white" }}>Achievements</Text>
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
