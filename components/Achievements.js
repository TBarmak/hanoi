import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import BackButton from './BackButton';

const dim = Dimensions.get('window')
const screenWidth = Math.round(Math.max(dim.width, dim.height));
const screenHeight = Math.round(Math.min(dim.width, dim.height));

export default function Achievements({ navigation }) {
    const [bests, setBests] = useState([])

    useEffect(() => {
        getBests()
    }, [])

    async function getBests() {
        let bestList = []
        for (let i = 3; i < 21; i++) {
            const value = await AsyncStorage.getItem('best' + i)
            let asJSON = JSON.parse(value)
            bestList.push({ id: i, data: asJSON })
        }
        setBests(bestList)
    }

    function renderRow({ item }) {
        let time = item.data === null ? null : item.data[1]
        if (time !== null) {
            time = parseFloat(time)
        }
        return (
            <View style={styles.rowContainer}>
                <View style={styles.numberCell}>
                    <Text style={styles.numberText}>{item.id}</Text>
                </View>
                <View style={styles.scoresContainer}>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreText}>{item.data === null ? "" : item.data[0]}</Text>
                    </View>
                    <View style={styles.scoreContainer}>
                        {time === null ?
                            <Text style={styles.scoreText} /> :
                            <Text style={styles.scoreText}>{Math.floor(time / 6000)}:{Math.floor((time % 6000) / 100).toString().padStart(2, "0")}.{(time % 100).toString().padStart(2, "0")}</Text>}
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton navigation={navigation} />
            </View>
            <View style={styles.flatListContainer}>
                <View style={styles.rowContainer}>
                    <View style={styles.numberCell}>
                        <Text style={styles.numberText}>#</Text>
                    </View>
                    <View style={styles.scoresContainer}>
                        <View style={styles.scoreContainer}>
                            <Text style={styles.scoreText}>Fewest Moves</Text>
                        </View>
                        <View style={styles.scoreContainer}>
                            <Text style={styles.scoreText}>Best Time</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={bests}
                    renderItem={renderRow}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        zIndex: 2,
        position: "absolute",
        top: Constants.statusBarHeight,
        left: 0, flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    flatListContainer: {
        top: Constants.statusBarHeight,
        height: screenHeight - 2 * Constants.statusBarHeight,
        borderWidth: 2,
        borderColor: "black"
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 50,
        width: "100%"
    },
    numberCell: {
        flexDirection: "row",
        justifyContent: "flex-end",
        borderWidth: 2,
        borderColor: "black",
        width: 50
    },
    numberText: {
        padding: 10,
        fontSize: 20
    },
    scoresContainer: {
        borderWidth: 2,
        borderColor: "black",
        flexDirection: "row",
        justifyContent: "space-between",
        width: screenWidth * 0.5
    },
    scoreContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%"
    },
    scoreText: {
        padding: 10,
        fontSize: 20
    }
});
