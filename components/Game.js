import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Animated, TouchableOpacity, Easing, Image} from 'react-native';
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
    const [discs, setDiscs] = useState([[], [], []])
    const [lifted, setLifted] = useState(null)
    const [blocked, setBlocked] = useState(false)
    const [redFlash, setRedFlash] = useState(-1)
    const [won, setWon] = useState(false)

    useEffect(() => createDiscs(), [numChips])

    function createDiscs() {
        /*
        createDiscs() creates the objects to represent the discs and sets the discs state to have all of these objects
        in the first position (on the first peg). A disc object has a width (number), height (number), color (hex), and 
        position (Animated.ValueXY).
        */
        let stack = []
        for (let i = 0; i < numChips; i++) {
            let discWidth = baseWidth * ((numChips - (3 * i / 4)) / (numChips + 1))
            let discHeight = (pegHeight - baseHeight) / (numChips + 1)
            stack.push({ width: discWidth, height: discHeight, color: colors[i % colors.length], position: new Animated.ValueXY({ x: pegXVals[0] - (discWidth / 2), y: baseYVal - discHeight * (i + 1) }) })
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
                    <Animated.View style={{ position: "absolute", width: disc.width, height: disc.height, backgroundColor: disc.color, ...disc.position.getLayout(), borderRadius: disc.height / 2 }} />
                )
            })
        })
    }

    function lift(stackIndex) {
        /*
        lift(stackIndex) animates the lifting of the disc on top of the chosen stack and sets the 
        lifted state to stackIndex, if there is a disc on top of the chosen stack.
        */
        if(discs[stackIndex].length === 0) {
            flash(stackIndex)
            setBlocked(false)
        } else {
            disc = discs[stackIndex][discs[stackIndex].length - 1]
            setLifted(stackIndex)
            Animated.timing(
                disc.position, {
                    toValue: {x: pegXVals[stackIndex] - (disc.width/2), y: screenHeight * 0.1},
                    easing: Easing.ease,
                    duration: 100
                }
            ).start(() => {
                setBlocked(false)
            })
        }
    }

    function drop(stackIndex) {
        /*
        drop(stackIndex) animates the moving and dropping of the lifted disc to the chosen stack (stackIndex) and 
        sets the lifted state to null, if the disc on top of the chosen peg is larger than the lifted disc.
        */
        let liftedDisc = discs[lifted][discs[lifted].length - 1]
        let topDisc = discs[stackIndex][discs[stackIndex].length - (1 + (lifted === stackIndex))]
        if(discs[stackIndex].length > 0 && topDisc && topDisc.width < liftedDisc.width) {
            flash(stackIndex)
            setBlocked(false)
        } else {
            discs[stackIndex].push(liftedDisc)
            discs[lifted].pop()
            Animated.timing(
                liftedDisc.position, {
                    toValue: {x: pegXVals[stackIndex] - (liftedDisc.width/2), y: screenHeight * 0.1},
                    easing: Easing.ease,
                    duration: 100
                }
            ).start(() => {
                let targetY = (topDisc ? parseFloat(JSON.stringify(topDisc.position.getLayout().top)) : baseYVal) - liftedDisc.height
                Animated.timing(
                    liftedDisc.position, {
                        toValue: {x: pegXVals[stackIndex] - (liftedDisc.width/2), y: targetY},
                        easing: Easing.ease,
                        duration: 100
                    }
                ).start(() => {
                    setLifted(null)
                    if(discs[1].length === numChips || discs[2].length === numChips) {
                        setWon(true)
                        setBlocked(true)
                    } else {
                        setBlocked(false)
                    }
                })
            })
        }
    }

    function flash(index) {
        /*
        flash(index) will make the Touchable Opacity of the provided index flash red for a short period of time
        to indicate that an illegal move has been attempted.
        */
        setRedFlash(index)
        setTimeout(() => setRedFlash(-1), 200)
    }

    return (
        <View style={styles.container}>
            <View style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
                <Pegs positions={pegXVals} baseWidth={baseWidth} baseHeight={baseHeight} pegHeight={pegHeight} pegTop={pegTop} />
            </View>
            {won ? <Image source={require('../assets/confetti.gif')} style={{width: "100%", height: "100%"}}/> : null }
            {renderDiscs()}
            {pegXVals.map((pegX, index) => {
                return <TouchableOpacity
                    style={{ position: "absolute", width: baseWidth, height: pegHeight, top: pegTop, left: pegX - (baseWidth / 2), backgroundColor: redFlash === index ? "red" : "transparent", opacity: 0.4, borderRadius: baseHeight/4}}
                    onPress={() => {
                        if (!blocked) {
                            if (lifted === null) {
                                setBlocked(true)
                                lift(index)
                            } else {
                                setBlocked(true)
                                drop(index)
                            }
                        }
                    }} />
            })}
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
