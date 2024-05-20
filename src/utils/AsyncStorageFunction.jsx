import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageFunction = () => {
  const AsyncSetItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Error setting item in AsyncStorage:', error);
    }
  };
  const AsyncGetItem = async key => {
    try {
      const value = await AsyncStorage.getItem(key);

      return value;
    } catch (error) {
      console.error('Error getting item from AsyncStorage:', error);
    }
  };
  const AsyncRemoveItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from AsyncStorage:', error);
    }
  };
  return {AsyncSetItem, AsyncGetItem, AsyncRemoveItem};
};
export default AsyncStorageFunction;
