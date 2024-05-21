import {StyleSheet, Image, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../../../assets/Colors';
import {widthToDp} from '../../utils/Responsive';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';
import AsyncStorageFunction from '../../utils/AsyncStorageFunction';
import useAuth from '../../CustomHooks/useAuth/useAuth';
const NotFirstTime = 'FirstTimeInvesticoon';
const access_token = 'access_token';
const Splashscreen = () => {
  const {AsyncGetItem, AsyncSetItem} = AsyncStorageFunction();
  const {getUserData} = useAuth();
  const navigation = useNavigation();
  const isFristTime = async () => {
    try {
      const token = await AsyncGetItem(NotFirstTime);
      if (token === 'true') {
        await fetchAccessToken();
      } else {
        await AsyncSetItem(NotFirstTime, 'true');
        navigation.navigate('OnboardingScreen');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAccessToken = async () => {
    try {
      console.log('Before fetchAccessToken');
      await AsyncGetItem(access_token).then(async token => {
        console.log('After fetchAccessToken');

        await getUserData(token);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    isFristTime();
    SplashScreen.hide();
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
// const fetchData = async () => {
//   try {
//     // const companies = ['Apple'];
//     dispatch(fetchDataStart());
//     const companies = ['Apple', 'Microsoft', 'Tesla', 'Amazon', 'Meta'];
//     const responses = [];
//     for (const company of companies) {
//       const stocksData = await getStocksTimePeriod(company, '1D');
//       console.log('stocksData', stocksData);
//       if (stocksData) {
//         responses.push(stocksData);
//       }
//     }
//     console.log(responses);
//     await saveDataToStorage(responses);
//     dispatch(fetchDataSuccess(responses));
//     SplashScreen.hide();
//     navigation.navigate('Tabs');
//   } catch (error) {
//     console.error('Error fetching and saving data:', error);
//     dispatch(fetchDataFailure(error));
//   }
// }; // AsyncStorage.clear();
// const checkAndUpdateData = async () => {
//   try {
//     const shouldCallAgain = await callApiAgain();
//     console.log('shouldCallAgain', shouldCallAgain);
//     if (shouldCallAgain) {
//       // Call API again and update data
//       await fetchData();
//     } else {
//       dispatch(fetchDataStart());
//       console.log(`Data is up to date`);
//       const response = await fetchDataFromStorage(); // Fetch data from storage
//       if (response) {
//         dispatch(fetchDataSuccess(response));
//       } else {
//         console.log('No data found in storage'); // Handle case where no data is found in storage
//       }
//       SplashScreen.hide();
//       navigation.navigate('Tabs');
//     }
//   } catch (error) {
//     dispatch(fetchDataFailure(error));
//     console.error(`Error checking and updating data `, error);
//   }
// };
// checkAndUpdateData();
