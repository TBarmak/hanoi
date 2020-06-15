import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';
import Pegs from '../components/Pegs'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const baseWidth = screenWidth / 4
const baseHeight = screenHeight / 8
const pegHeight = screenHeight * 0.6
const pegTop = screenHeight * 0.3
const pegXVals = [0.2 * screenWidth, 0.5 * screenWidth, 0.8 * screenWidth]
const baseYVal = pegTop + pegHeight - baseHeight
const colors = ["#FF0000", "#FF6500", "#FFA500", "#FFFF00", "#ADFF2F", "#32CD32", "#008000", "#0000FF", "#4B0082", "#EE82EE"]

export default function Game() {
    const [numChips, setNumChips] = useState(4) // This will be inherited from props later on
    const [discs, setDiscs] = useState([[],[],[]])
    const [lifted, setLifted] = useState(null)
    const [blocked, setBlocked] = useState(false)
    const [redFlash, setRedFlash] = useState(-1)

    useEffect(() => createDiscs(), [numChips])

    function createDiscs() {
        /*
        createDiscs() creates the objects to represent the discs and sets the discs state to have all of these objects
        in the first position (on the first peg). A disc object has a width (number), height (number), color (hex), and 
        position (Animated.ValueXY).
        */
        let stack = []
        for(let i = 0; i < numChips; i++) {
            let discWidth = baseWidth * ((numChips - (3*i/4)) / (numChips + 1))
            let discHeight = (pegHeight - baseHeight) / (numChips + 1)
            stack.push({width: discWidth, height: discHeight, color: colors[i % colors.length], position: new Animated.ValueXY({x: pegXVals[0] - (discWidth/2), y: baseYVal - discHeight * (i + 1)})})
        }
        setDiscs([stack, [], []])
    }

    function renderDiscs() {
        /*
        renderDiscs() returns Animated.Views to represent the discs. It maps the objects in the discs state to Animated.Views
        with the height, width, color, and position contained in the object.
        */
        return discs.map((stack) => {
            return stack.map((disc) => {
                return (
                    <Animated.View style={{position: "absolute", width: disc.width, height: disc.height, backgroundColor: disc.color, ...disc.position.getLayout(), borderRadius: disc.height / 2}}/>
                )
            })
        })
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
