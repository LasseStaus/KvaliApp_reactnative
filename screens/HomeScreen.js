import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text>This is the home screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default HomeScreen;