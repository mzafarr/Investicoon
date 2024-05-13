import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLocalStorage = () => {
  const saveDataToStorage = async (companyName, data) => {
    try {
      const timestamp = new Date().getTime();
      await AsyncStorage.setItem(
        `${companyName}`,
        JSON.stringify({data, timestamp}),
      );
      console.log(
        `Stock data for ${companyName} saved successfully at ${timestamp}`,
      );
    } catch (error) {
      console.error(`Error saving data for ${companyName}:`, error);
    }
  };
  const fetchDataFromStorage = async index => {
    try {
      const key = `company${index}`;
      const storedData = await AsyncStorage.getItem(key);

      if (storedData !== null) {
        const {data, timestamp} = JSON.parse(storedData);
        console.log(
          `Data retrieved for company${index} at ${timestamp}:`,
          data,
        );
        return {data, timestamp};
      } else {
        console.log(`No data found for company${index}`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching data for company${index}:`, error);
      return null;
    }
  };
  const callApiAgain = async companyName => {
    try {
      const key = `${companyName}`;
      const storedData = await AsyncStorage.getItem(key);

      if (storedData !== null) {
        const {timestamp} = JSON.parse(storedData);
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - timestamp;
        const millisecondsIn24Hours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        return timeDifference > millisecondsIn24Hours;
      } else {
        console.log(`No data found for company:${companyName}`);
        // No data found, so need to call API again
        return true;
      }
    } catch (error) {
      console.error(`Error fetching data for company:${companyName}:`, error);
      // Return true to indicate that API should be called again due to error
      return true;
    }
  };
  return {saveDataToStorage, fetchDataFromStorage, callApiAgain};
};
