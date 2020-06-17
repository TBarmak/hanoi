import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function NumberPicker(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 100 }}>{props.number}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                {props.number > 3 ? <TouchableOpacity onPress={() => props.setNumber(props.number - 1)} style={{ ...styles.button, backgroundColor: "red" }}>
                    <Icon
                        name="minus"
                        size={20}
                        color="#fff"
                    />
                </TouchableOpacity> : null}
                {props.number < 20 ? <TouchableOpacity onPress={() => props.setNumber(props.number + 1)} style={{ ...styles.button, backgroundColor: "green" }}>
                    <Icon
                        name="plus"
                        size={20}
                        color="#fff"
                    />
                </TouchableOpacity> : null}
            </View>
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
    button: {
        width: 80,
        height: 80,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30
    }
});
