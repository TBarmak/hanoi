import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Pegs from '../components/Pegs'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const baseWidth = screenWidth / 4
const baseHeight = screenHeight / 8
const pegHeight = screenHeight * 0.6
const pegTop = screenHeight * 0.3
const pegXVals = [0.2 * screenWidth, 0.5 * screenWidth, 0.8 * screenWidth]

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
            <View style={{position: "absolute", top: 0, left: 0, zIndex: -1}}>
                <Pegs positions={pegXVals} baseWidth={baseWidth} baseHeight={baseHeight} pegHeight={pegHeight} pegTop={pegTop}/>
            </View>
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
