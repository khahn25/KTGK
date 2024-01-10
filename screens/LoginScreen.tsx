import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Xử lý đăng nhập ở đây
        // if () {

        // }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../picture/pic.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>FOODU</Text>

            <View style={styles.flex}>
                <View style={styles.fb_gg}>
                    <Image
                        source={require('../picture/facebook.png')}
                        style={styles.facebook_gg}
                    />
                    <Text style={styles.text}>facebook</Text>
                </View>

                <View style={styles.fb_gg}>
                    <Image
                        source={require('../picture/google.png')}
                        style={styles.facebook_gg}
                    />
                    <Text style={styles.text}>google</Text>
                </View>
            </View>

            <Text style={{ marginTop: 20 }}>Or</Text>

            <View>
                <Text>Email ID</Text>
                <TextInput
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    style={styles.input}
                />
            </View>
            <TextInput
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
            <TouchableOpacity style={styles.registerText} onPress={() => navigation.navigate('RegisterScreen')}>
                <Text>Don't have an account? Register here</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    registerText: {
        marginTop: 20,
        color: 'blue',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 50

    },
    text: {
        fontWeight: '500',
        fontSize: 20
    },
    facebook_gg: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    flex: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    fb_gg: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    }
});

export default LoginScreen;
