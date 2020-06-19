import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import NumberPicker from './NumberPicker';
import RadioButtons from './RadioButtons';

const options = ['Zen Mode', 'Count Moves', 'Timed']

export default function Settings({ navigation }) {
    const [number, setNumber] = useState(3)
    const [selected, setSelected] = useState(0)

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <NumberPicker number={number} setNumber={setNumber}/>
                <RadioButtons options={options} selected={selected} setSelected={setSelected}/>
            </View>
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
