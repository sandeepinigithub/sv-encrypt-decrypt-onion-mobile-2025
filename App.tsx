// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NewAppScreen templateFileName="App.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

// import React, { useState } from 'react';
// import {
//   StatusBar,
//   StyleSheet,
//   useColorScheme,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter both email and password');
//       return;
//     }

//     // TODO: Replace with actual authentication
//     Alert.alert('Login Success', `Welcome, ${email}!`);
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Login</Text>
      
//       <TextInput
//         placeholder="Email"
//         placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
//         style={[styles.input, { color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#666' : '#ccc' }]}
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       <TextInput
//         placeholder="Password"
//         placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
//         style={[styles.input, { color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#666' : '#ccc' }]}
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 24,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     marginBottom: 24,
//     alignSelf: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default App;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;

