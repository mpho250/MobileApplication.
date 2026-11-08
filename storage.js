
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data to local storage
export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data saved successfully');
  } catch (error) {
    console.log('Error saving data:', error);
  }
};

// Retrieve data from local storage
export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);

    return data !== null ? JSON.parse(data) : null;
  } catch (error) {
    console.log('Error retrieving data:', error);
    return null;
  }
};

// Remove data from local storage
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed successfully');
  } catch (error) {
    console.log('Error removing data:', error);
  }
};

// Clear all local storage
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Local storage cleared');
  } catch (error) {
    console.log('Error clearing storage:', error);
  }
};
