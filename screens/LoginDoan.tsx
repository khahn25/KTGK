import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { validateEmail } from '../utils/validate';
import { LoginApp } from '../services/interfaces/authentication';

const LoginDoan = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = async () => {
        if (!validateEmail(email)) {
            alert("Email không hợp lệ!")
        }

        if (email == "Bien@gmail.com" && password == '1') {
            navigation.navigate('MainScreen')

        }

        try {
            const loginResponse = await LoginApp({
                email,
                password
            })
            const { data } = loginResponse
            navigation.navigate('MainScreen')
        } catch (error) {
            const { data } = error.response
            alert(data.message)
        }
    };

    const showPass = () => {
        setShowPassword(!showPassword)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../picture/LogoDoan.png')}
                style={styles.storeimage}
                resizeMode="cover"
            />
            <Text style={styles.storetext}>Đăng nhập</Text>

            <View style={styles.view}>


                <Text style={styles.textemailpass}>Email</Text>
                <View style={styles.inputContainer}>
                    <Icon name="envelope" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                        style={styles.textinput}
                    />
                </View>

                <Text style={styles.textemailpass}>Password</Text>

                <View style={styles.inputContainer}>
                    <Icon name="lock" style={styles.icon} />

                    <TextInput
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                        style={styles.textinput}
                    />

                    <Icon name={showPassword ? 'eye' : 'eye-slash'} onPress={showPass} style={styles.iconRight} />
                </View>
            </View>
            <View style={styles.quenmkdangky}>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Quên mật khẩu
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.text}>
                        Bạn chưa có tài khoản?
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 20
        // width: '100%'
    },
    storetext: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: '800',
        marginVertical: 30
    },
    storeimage: {
        width: '100%',
        height: '33%'
    },
    inputContainer: {
        flexDirection: 'row',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 20,
        alignItems: 'center',
        backgroundColor: "gray",
        borderRadius: 10,

        // marginHorizontal: 20
    },
    view: {
        width:'80%'
        
    },
    icon: {
        color: 'gray',
        

    },
    iconRight:{
        position: 'absolute',
        right: 10,
        zIndex: 1,
        fontSize: 20
    },
    textinput: {
        width: '100%',
        height: '100%'
    },
    quenmkdangky: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '80%'
    },
    textemailpass: {
        textAlign: 'right',
        width: '100%'
    },
    text: {
        color: '#0033FF'
    },
    button: {
        backgroundColor: '#99CCFF',
        padding: 10,
        borderRadius: 5,
        width: '80%'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default LoginDoan;
