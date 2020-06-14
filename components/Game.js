import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Game() {
    const [numChips, setNumChips] = useState(4) // This will be inherited from props later on
    const [discs, setDiscs] = useState([[],[],[]])
    const [lifted, setLifted] = useState(null)
    const [blocked, setBlocked] = useState(false)
    const [redFlash, setRedFlash] = useState(-1)

    useEffect(() => createDiscs(), [numChips])

    function createDiscs() {
        // TODO: Implement the createDiscs() function to create the discs based on numChips
    }

    function renderDiscs() {
        // TODO: Implement the renderDiscs() function to return Animated Views for the discs
    }

    function lift(stackIndex) {
        // TODO: Implement lift(stackIndex) function to lift a disc off of a stack
    }

    function drop(stackIndex) {
        // TODO: Implement drop(stackIndex) function to drop a disc on a stack
    }

    function flash(index) {
        // TODO: Implement flash(index) function to make a stack flash red if a player attempt to make an illegal move
    }

    return (
        <View style={styles.container}>
            {renderDiscs()}
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
});
