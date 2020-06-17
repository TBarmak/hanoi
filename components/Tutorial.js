import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Tutorial({ navigation }) {
    return (
        <View style={styles.container}>
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
});
