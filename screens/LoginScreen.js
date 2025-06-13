import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Alert,
    useColorScheme,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [mobileNo, setMobileNo] = useState('9634958888');
    const [password, setPassword] = useState('Password@123');

    const handleLogin = async () => {
        if (!mobileNo || !password) {
            Alert.alert('Error', 'Please enter both mobile number and password');
            return;
        }

        try {
            const payload = { mobileNo, password };
            const response = await axiosInstance.post('/login/user', payload);
            navigation.navigate('Dashboard', { userData: response.data });
        } catch (error) {
            console.error('Login error', error);
            Alert.alert('Login Failed', 'Invalid credentials or server error.');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f5f5f5' }]}>
                    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

                    <View style={styles.card}>
                        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
                            Login
                        </Text>

                        <View style={styles.field}>
                            <Text style={[styles.label, { color: isDarkMode ? '#ddd' : '#333' }]}>Mobile Number</Text>
                            <TextInput
                                placeholder="Enter mobile number"
                                placeholderTextColor={isDarkMode ? '#888' : '#999'}
                                style={[
                                    styles.input,
                                    {
                                        color: isDarkMode ? '#fff' : '#000',
                                        borderColor: isDarkMode ? '#666' : '#ccc',
                                        backgroundColor: isDarkMode ? '#1c1c1e' : '#fff',
                                    },
                                ]}
                                value={mobileNo}
                                onChangeText={setMobileNo}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={[styles.label, { color: isDarkMode ? '#ddd' : '#333' }]}>Password</Text>
                            <TextInput
                                placeholder="Enter password"
                                placeholderTextColor={isDarkMode ? '#888' : '#999'}
                                style={[
                                    styles.input,
                                    {
                                        color: isDarkMode ? '#fff' : '#000',
                                        borderColor: isDarkMode ? '#666' : '#ccc',
                                        backgroundColor: isDarkMode ? '#1c1c1e' : '#fff',
                                    },
                                ]}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    card: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 24,
        alignSelf: 'center',
    },
    field: {
        marginBottom: 18,
    },
    label: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
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
