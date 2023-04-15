import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function Detail() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>detail</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
    }
})

export default Detail