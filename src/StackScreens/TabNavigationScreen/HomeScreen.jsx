import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Colors from '../../../assets/Colors';
import {useStockApi} from '../../CustomHooks/useStockApi/useStockApi';
import {heightToDp, widthToDp, window} from '../../utils/Responsive';
import {LineChart} from 'react-native-gifted-charts';
import HomeGraph from '../../Components/HomeGraphComponent/HomeGraph';
import AnimatedBar from '../../Components/AnimatedBar/AnimatedBar';
import HomeRowTab from '../../Components/HomeRowTab/HomeRowTab';
import SplashScreen from 'react-native-splash-screen';
import {useSharedValue} from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
const PAGE_WIDTH = window.width;

const HomeScreen = ({navigation}) => {
  const [cName, setcName] = useState('');
  const {getStocks} = useStockApi();
  const company = {
    symbol: 'AAPL:NASDAQ',
    name: 'Apple Inc',
    type: 'stock',
    price: 186.88,
    open: 187.51,
    high: 188.3,
    low: 186.29,
    volume: 26061718,
    previous_close: 186.28,
    change: 0.6,
    change_percent: 0.3221,
    pre_or_post_market: 187.79,
    pre_or_post_market_change: 1.0622,
    pre_or_post_market_change_percent: 0.5688,
    last_update_utc: '2024-05-14 17:42:46',
    country_code: 'US',
    exchange: 'NASDAQ',
    exchange_open: '2024-05-14 09:30:00',
    exchange_close: '2024-05-14 16:00:00',
    timezone: 'America/New_York',
    utc_offset_sec: -14400,
    currency: 'USD',
    about:
      "Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services. Devices include the iPhone, iPad, Mac, Apple Watch, Vision Pro, and Apple TV; operating systems include iOS, iPadOS, and macOS; and software applications and services include iTunes, iCloud, Apple Music, and Apple TV+.\nFor most of 2011 to 2024, Apple became the world's largest company by market capitalization until Microsoft assumed the position in January 2024. In 2022, Apple was the largest technology company by revenue, with US$394.3 billion. As of 2023, Apple was the fourth-largest personal computer vendor by unit sales, the largest manufacturing company by revenue, and the largest vendor of mobile phones in the world. It is one of the Big Five American information technology companies, alongside Alphabet, Amazon, Meta, and Microsoft.\nApple was founded as Apple Computer Company on April 1, 1976, to produce and market Steve Wozniak's Apple I personal computer. The company was incorporated by Wozniak and Steve Jobs in 1977.",
    year_low: 164.075,
    year_high: 199.62,
    primary_exchange: 'NASDAQ',
    company_website: 'http://www.apple.com/',
    company_country_code: 'US',
    company_country: 'United States',
    company_state: 'California',
    company_city: 'Cupertino',
    company_street_address: 'One Apple Park Way',
    company_ceo: 'Tim Cook',
    company_employees: 161000,
    company_cdp_score: 'A-',
    company_founded_date: '1976-04-01',
    company_cdp_url: 'https://www.cdp.net/en/responses/865',
    avg_volume: 62684101,
    company_pe_ratio: 29.0495,
    company_market_cap: 2864712937910.1562,
    company_dividend_yield: 0.5353,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Apple_Inc.',
    google_mid: '/m/07zmbvf',
  };
  const companyData = {
    symbol: 'AAPL:NASDAQ',
    name: 'Apple Inc',
    type: 'stock',
    price: 186.66,
    change: 3.61,
    change_percent: 1.9721,
    previous_close: 183.05,
    last_update_utc: '2024-05-13 16:50:02',
    country_code: 'US',
    exchange: 'NASDAQ',
    exchange_open: '2024-05-13 09:30:00',
    exchange_close: '2024-05-13 16:00:00',
    timezone: 'America/New_York',
    utc_offset_sec: -14400,
    currency: 'USD',
    google_mid: '/m/07zmbvf',
  };
  const ptData = [
    {value: 160, date: '1 Apr 2022'},
    {value: 180, date: '2 Apr 2022'},
    {value: 190, date: '3 Apr 2022'},
    {value: 180, date: '4 Apr 2022'},
    {value: 140, date: '5 Apr 2022'},

    {value: 220, date: '9 Apr 2022'},
    {
      value: 240,
      date: '10 Apr 2022',
      label: '10 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},
    {
      value: 300,
      date: '20 Apr 2022',
      label: '20 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {value: 210, date: '29 Apr 2022'},
    {
      value: 200,
      date: '30 Apr 2022',
      label: '30 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
  ];
  const BarData = [
    {value: 160, date: '1 Apr 2022'},
    {value: 180, date: '2 Apr 2022'},
    {value: 190, date: '3 Apr 2022'},
    {value: 180, date: '4 Apr 2022'},
    {value: 140, date: '5 Apr 2022'},

    {value: 220, date: '9 Apr 2022'},

    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},

    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {value: 210, date: '29 Apr 2022'},

    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
  ];

  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue(0);
  const [data, setData] = useState([...new Array(4).keys()]);
  const [isVertical, setIsVertical] = useState(false);
  const [isFast, setIsFast] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isPagingEnabled, setIsPagingEnabled] = useState(true);
  const ref = useRef(null);
  const baseOptions = isVertical
    ? {
        vertical: true,
        width: windowWidth,
        height: PAGE_WIDTH / 2,
      }
    : {
        vertical: false,
        width: windowWidth,
        height: widthToDp(80),
      };
  const navigateToCompanyOverview = () => {
    navigation.navigate('CompanyViewScreen');
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: widthToDp(15)}}>
        <View
          style={{
            marginTop: widthToDp(3),
          }}>
          <Carousel
            {...baseOptions}
            loop={true}
            enabled
            ref={ref}
            defaultScrollOffsetValue={scrollOffsetValue}
            testID={'xxx'}
            style={{width: '100%'}}
            autoPlay={isAutoPlay}
            autoPlayInterval={isFast ? 100 : 2000}
            data={data}
            pagingEnabled={isPagingEnabled}
            mode="parallax"
            renderItem={({index}) => (
              <View style={{}}>
                <HomeGraph
                  companyData={companyData}
                  graphData={ptData}
                  onPress={() => navigateToCompanyOverview()}
                />
              </View>
            )}
          />
          {/* <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: widthToDp(2),
              gap: 10,
            }}>
            <HomeGraph
              companyData={companyData}
              graphData={ptData}
              onPress={() => navigateToCompanyOverview()}
            />
            <HomeGraph
              companyData={companyData}
              graphData={ptData}
              onPress={() => navigateToCompanyOverview()}
            />
            <HomeGraph
              companyData={companyData}
              graphData={ptData}
              onPress={() => navigateToCompanyOverview()}
            />
            <HomeGraph
              companyData={companyData}
              graphData={ptData}
              onPress={() => navigateToCompanyOverview()}
            />
            <HomeGraph
              companyData={companyData}
              graphData={ptData}
              onPress={() => navigateToCompanyOverview()}
            />
          </ScrollView> */}
        </View>
        <View style={{marginTop: widthToDp(5)}}>
          <AnimatedBar />
        </View>
        <View>
          <HomeRowTab
            companyData={companyData}
            graphData={BarData}
            onPress={() => navigateToCompanyOverview()}
          />
          <HomeRowTab
            companyData={companyData}
            graphData={BarData}
            onPress={() => navigateToCompanyOverview()}
          />
          <HomeRowTab
            companyData={companyData}
            graphData={BarData}
            onPress={() => navigateToCompanyOverview()}
          />
          <HomeRowTab
            companyData={companyData}
            graphData={BarData}
            onPress={() => navigateToCompanyOverview()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.white,
  },
});

export default HomeScreen;

// <View
//   style={{
//     paddingVertical: 100,
//     paddingLeft: 20,
//     backgroundColor: '#1C1C1C',
//   }}>
//   <LineChart
//     areaChart
//     data={giftedData}
//     rotateLabel
//     yAxisOffset={giftedData[0].value - 20}
//     width={widthToDp(100)}
//     hideDataPoints
//     spacing={10}
//     color="#00ff83"
//     thickness={2}
//     startFillColor="rgba(20,105,81,0.3)"
//     endFillColor="rgba(20,85,81,0.01)"
//     startOpacity={0.9}
//     endOpacity={0.2}
//     initialSpacing={0}
//     noOfSections={6}
//     yAxisColor="white"
//     yAxisThickness={0}
//     rulesType="solid"
//     rulesColor="gray"
//     yAxisTextStyle={{color: 'gray'}}
//     yAxisSide="right"
//     xAxisColor="lightgray"
//     pointerConfig={{
//       pointerStripHeight: 100,
//       pointerStripColor: 'lightgray',
//       pointerStripWidth: 2,
//       pointerStripHeight: 140,
//       pointerColor: 'lightgray',
//       radius: 6,
//       pointerLabelWidth: 100,
//       pointerLabelHeight: 80,
//       activatePointersOnLongPress: true,
//       autoAdjustPointerLabelPosition: false,
//       pointerLabelComponent: items => {
//         return (
//           console.log(Math.round(parseFloat(items[0].value) * 100) / 10),
//           (
//             <View
//               style={{
//                 height: 90,
//                 width: 100,
//                 justifyContent: 'center',
//                 marginTop: -30,
//                 marginLeft: -40,
//               }}>
//               {/* <Text
//               style={{
//                 color: 'white',
//                 fontSize: 14,
//                 marginBottom: 6,
//                 textAlign: 'center',
//               }}>
//               {items[0].date}
//             </Text> */}

//               <View
//                 style={{
//                   paddingHorizontal: 14,
//                   paddingVertical: 6,
//                   borderRadius: 16,
//                   backgroundColor: 'white',
//                 }}>
//                 <Text
//                   style={{
//                     fontWeight: 'bold',
//                     textAlign: 'center',
//                     color: 'black',
//                   }}>
//                   {'$' +
//                     Math.round(parseFloat(items[0].value) * 100) / 10}
//                 </Text>
//               </View>
//             </View>
//           )
//         );
//       },
//     }}
//   />
// </View>;
// function processData(inputData) {
//   const timeSeries = inputData.data.time_series;
//   const dataArray = [];

//   for (const key in timeSeries) {
//     if (timeSeries.hasOwnProperty(key)) {
//       const price = timeSeries[key].price;
//       dataArray.push({value: price});
//     }
//   }
//   return dataArray;
// }
