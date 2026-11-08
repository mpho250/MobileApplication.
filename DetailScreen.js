
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Details</Text>

      <View style={styles.card}>
        <Text style={styles.itemName}>Learning Item</Text>

        <Text style={styles.description}>
          This screen displays detailed information about the
          selected item in the application.
        </Text>

        <Text style={styles.info}>Category: Education</Text>
        <Text style={styles.info}>Status: Available</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation?.goBack()}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 25,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    elevation: 3,
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2457C5',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    lineHeight: 24,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2457C5',
    padding: 16,
    borderRadius: 8,
    marginTop: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
