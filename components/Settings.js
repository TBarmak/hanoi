import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import NumberPicker from './NumberPicker';

export default function Settings({ navigation }) {
    const [number, setNumber] = useState(3)

    return (
        <View style={styles.container}>
            <Text>Number of discs:</Text>
            <NumberPicker number={number} setNumber={setNumber}/>
            <TouchableOpacity 
                style={{backgroundColor: "black", width: 100, height: 50, justifyContent: "center", alignItems: "center", margin: 10}}
                onPress={() => navigation.navigate("Game", {number: number})}>
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
    }
});
