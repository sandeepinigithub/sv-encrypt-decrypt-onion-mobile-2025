import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Alert,
    useColorScheme,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [mobileNo, setMobileNo] = useState('9634958888');
    const [password, setPassword] = useState('Password@123');

    // const handleLogin = () => {
    //     if (!mobileNo || !password) {
    //         Alert.alert('Error', 'Please enter both mobileNo and password');
    //         return;
    //     }

    //     // Simulate successful login
    //     navigation.navigate('Dashboard');
    // };

    const handleLogin = async () => {
        if (!mobileNo || !password) {
            Alert.alert('Error', 'Please enter both mobileNo and password');
            return;
        }

        try {
            const payload = {
                "mobileNo": mobileNo,
                "password": password
            }
            const response = await axiosInstance.post('/login/user', payload);
            // Pass response data to Dashboard
            navigation.navigate('Dashboard', { userData: response.data });
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Login</Text>

            <TextInput
                placeholder="Mobile"
                placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
                style={[styles.input, { color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#666' : '#ccc' }]}
                value={mobileNo}
                onChangeText={setMobileNo}
                keyboardType="numeric"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Password"
                placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
                style={[styles.input, { color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#666' : '#ccc' }]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 24,
        alignSelf: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default LoginScreen;
