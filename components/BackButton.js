import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function BackButton(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.container}>
            <Icon
                name="arrow-left"
                size={20}
                color="#fff"
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue", 
        borderRadius: 20, 
        padding: 10, 
        marginHorizontal: 10
    },
});
