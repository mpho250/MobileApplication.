
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>MyApp</Text>
        <Text style={styles.headerText}>Home</Text>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.description}>
          Explore our application and discover useful information.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation?.navigate('Detail')}
      >
        <Text style={styles.cardTitle}>Explore Items</Text>
        <Text style={styles.cardDescription}>
          View more information about available items.
        </Text>
        <Text style={styles.link}>View Details →</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation?.navigate('Settings')}
      >
        <Text style={styles.cardTitle}>Settings</Text>
        <Text style={styles.cardDescription}>
          Manage your application preferences.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2457C5',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  welcome: {
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    color: '#666',
    marginBottom: 10,
  },
  link: {
    color: '#2457C5',
    fontWeight: 'bold',
  },
});
