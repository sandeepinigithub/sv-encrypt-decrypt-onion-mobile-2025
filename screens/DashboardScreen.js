import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DashboardScreen({ route }) {
  const { userData } = route.params;
  console.log(userData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {userData?.name} </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userData?.name || 'N/A'}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userData?.email || 'N/A'}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{userData?.phoneNumber || 'N/A'}</Text>

        <Text style={styles.label}>Role:</Text>
        <Text style={styles.value}>{userData?.role || 'N/A'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});

export default DashboardScreen;
