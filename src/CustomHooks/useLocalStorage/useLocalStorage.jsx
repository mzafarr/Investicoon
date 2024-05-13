import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLocalStorage = () => {
  const saveDataToStorage = async data => {
    try {
      const timestamp = new Date().getTime();
      await AsyncStorage.setItem(
        'companies',
        JSON.stringify({data, timestamp}),
      );
      console.log(`Stock data data saved successfully at ${timestamp}`);
    } catch (error) {
      console.error(`Error saving data`, error);
    }
  };
  const fetchDataFromStorage = async () => {
    try {
      const key = 'companies';
      const storedData = await AsyncStorage.getItem(key);

      if (storedData !== null) {
        const {data} = JSON.parse(storedData);
        // console.log(`Data retrieved for companies`, data);
        return {data};
      } else {
        console.log(`No data found for company`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching data for company:`, error);
      return null;
    }
  };
  const callApiAgain = async companyName => {
    try {
      const key = 'companies';
      const storedData = await AsyncStorage.getItem(key);

      if (storedData !== null) {
        const {timestamp} = JSON.parse(storedData);
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - timestamp;
        const millisecondsIn24Hours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        return timeDifference > millisecondsIn24Hours;
      } else {
        console.log(`No data found for company}`);
        // No data found, so need to call API again
        return true;
      }
    } catch (error) {
      console.error(`Error fetching data for company`, error);
      // Return true to indicate that API should be called again due to error
      return true;
    }
  };
  return {saveDataToStorage, fetchDataFromStorage, callApiAgain};
};
