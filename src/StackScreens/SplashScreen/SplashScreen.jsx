import {StyleSheet, Image, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../../../assets/Colors';
import {widthToDp} from '../../utils/Responsive';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';
import {useStockApi} from '../../CustomHooks/useStockApi/useStockApi';
import {useLocalStorage} from '../../CustomHooks/useLocalStorage/useLocalStorage';

const Splashscreen = () => {
  const {getStocks, getStocksTimePeriod, getCompanyInfo} = useStockApi();
  const {saveDataToStorage, callApiAgain} = useLocalStorage();

  const navigation = useNavigation();
  const fetchData = async () => {
    try {
      const companies = ['Apple'];
      // const companies = ['Apple', 'Microsoft', 'Tesla', 'Amazon', 'Meta'];

      for (const company of companies) {
        const stocksData = await getStocks(company);
        if (stocksData) {
          await saveDataToStorage(company, stocksData.data);
        }
      }

      // Hide splash screen and navigate away after fetching and saving data
      SplashScreen.hide();
      navigation.navigate('Tabs');
    } catch (error) {
      console.error('Error fetching and saving data:', error);
    }
  };
  useEffect(() => {
    const checkAndUpdateData = async companyName => {
      try {
        const shouldCallAgain = await callApiAgain(companyName);
        console.log('shouldCallAgain', shouldCallAgain);
        if (shouldCallAgain) {
          // Call API again and update data
          await fetchData();
        } else {
          console.log(`Data for ${companyName} is up to date`);
          console.log('splash off');
          SplashScreen.hide();
          navigation.navigate('Tabs');
        }
      } catch (error) {
        console.error(
          `Error checking and updating data for ${companyName}:`,
          error,
        );
      }
    };
    checkAndUpdateData('Apple');
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>INVESTICOON</Text>
      <Text style={styles.subheading}>Analytics Made Easy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.logoBackground,
  },
  image: {
    width: widthToDp(70),
    height: widthToDp(70),
  },
  heading: {
    color: Colors.black,
    fontSize: widthToDp(10),
    fontWeight: 'bold',
    marginTop: widthToDp(2),
  },
  subheading: {
    color: Colors.black,
    fontSize: widthToDp(5),
    marginTop: widthToDp(3),
  },
});

export default Splashscreen;
