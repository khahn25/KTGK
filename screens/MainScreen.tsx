import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MainScreen = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../picture/pic.png')}
                style={styles.pic}
            />
            <Text style={styles.text}>FOODU</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pic: {
        justifyContent: 'center',
        width: 200,
        height: 200,
        alignItems: 'center'
    },
    text: {
        fontWeight: '500',
        fontSize: 45
    }
});

export default MainScreen;
