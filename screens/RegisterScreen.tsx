import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Xử lý đăng ký ở đây
    };

    return (
        <View style={styles.container}>
            <Text>ForgorPassword</Text>
            <TextInput
                placeholder="Email/Mobilenumber"
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
});

export default RegisterScreen;
