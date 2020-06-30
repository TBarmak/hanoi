import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import BackButton from './BackButton';

export default function Tutorial({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton navigation={navigation} />
            </View>
            <Text>This is the tutorial screen</Text>
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
    header: {
        zIndex: 2,
        position: "absolute",
        top: Constants.statusBarHeight,
        left: 0, flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    }
});
