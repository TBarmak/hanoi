import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const dim = Dimensions.get('window')
const screenWidth = Math.round(Math.max(dim.width, dim.height));
const screenHeight = Math.round(Math.min(dim.width, dim.height));

export default function RadioButtons(props) {
    return (
        <View style={styles.container}>
            {props.options.map((option, index) => {
                return (
                    <View style={styles.buttonContainer}>
                        <Text style={{fontSize: 20}}>{option}</Text>
                        <TouchableOpacity style={{...styles.circle, backgroundColor: index === props.selected ? "blue" : "transparent"}} onPress={() => props.setSelected(index)}/>
                    </View>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 15,
        width: 200
    },
    circle: {
        width: 40,
        height: 40,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "blue"
    },
    checkedCircle: {
        width: "100%",
        height: "100%",
        backgroundColor: "blue",
        borderRadius: 20,
    }
});