import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Colors from '../../../assets/Colors';
import {useStockApi} from '../../CustomHooks/useStockApi/useStockApi';
import {heightToDp, widthToDp} from '../../utils/Responsive';
// import {LineChart, LineChartBicolor} from 'react-native-gifted-charts';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const HomeScreen = ({navigation}) => {
  const [cName, setcName] = useState('');

  const {getStocks, getStocksTimePeriod} = useStockApi();
  function processData(inputData) {
    const timeSeries = inputData.data.time_series;
    const dataArray = [];

    for (const key in timeSeries) {
      if (timeSeries.hasOwnProperty(key)) {
        const price = timeSeries[key].price;
        dataArray.push(price);
      }
    }

    return dataArray;
  }
  const result = processData(data);
  const final = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: result,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  const chartConfig = {
    scrollableInfoTextStyle: {
      color: 'white',
      marginHorizontal: 4,
      flex: 1,
      textAlign: 'center',
    },
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          color: Colors.white,
        }}
        onChangeText={e => setcName(e)}
        value={cName}
        placeholder="Company Name"
      />
      <Button title="Fetch Data" onPress={() => getStocks(cName)} />
      {/* {result !== null &&
        {
           <LineChart
          data={result}
          spacing={22}
          thickness={5}
          color="red"
          hideRules
          hideDataPoints
          xAxisThickness={0}
          yAxisThickness={0}
          highlightedRange={{
            from: 5,
            to: 12,
            color: 'green',
          }}
          pressEnabled
          arrowConfig={{
            length: 10,
            width: 10,
            color: 'blue',
          }}
        /> 
        }} */}
      <ScrollView horizontal={true}>
        <LineChart
          data={final}
          width={screenWidth}
          height={heightToDp(30)}
          chartConfig={chartConfig}
          withInnerLines={false}
          bezier
          withDots={false}
          withShadow
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
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

const data = {
  status: 'OK',
  request_id: 'bbe94622-cdce-46ae-8e83-7b7a243732b1',
  data: {
    symbol: 'MSFT:NASDAQ',
    type: 'stock',
    price: 410.43,
    previous_close: 406.66,
    change: 3.77,
    change_percent: 0.9271,
    pre_or_post_market: 408.74,
    pre_or_post_market_change: -1.1264,
    pre_or_post_market_change_percent: -0.2748,
    last_update_utc: '2024-05-06 16:35:15',
    time_series: {
      '2023-11-06 16:00:00': {
        price: 356.53,
        change: 0,
        change_percent: 0,
        volume: 23828301,
      },
      '2023-11-07 16:00:00': {
        price: 360.53,
        change: 4,
        change_percent: 0.0112,
        volume: 25833931,
      },
      '2023-11-08 16:00:00': {
        price: 363.2,
        change: 6.67,
        change_percent: 0.0187,
        volume: 26767828,
      },
      '2023-11-09 16:00:00': {
        price: 360.69,
        change: 4.16,
        change_percent: 0.0117,
        volume: 24847331,
      },
      '2023-11-10 16:00:00': {
        price: 369.67,
        change: 13.14,
        change_percent: 0.0369,
        volume: 28065164,
      },
      '2023-11-13 16:00:00': {
        price: 366.68,
        change: 10.15,
        change_percent: 0.0285,
        volume: 19986506,
      },
      '2023-11-14 16:00:00': {
        price: 370.27,
        change: 13.74,
        change_percent: 0.0385,
        volume: 27683862,
      },
      '2023-11-15 16:00:00': {
        price: 369.67,
        change: 13.14,
        change_percent: 0.0369,
        volume: 26860095,
      },
      '2023-11-16 16:00:00': {
        price: 376.17,
        change: 19.64,
        change_percent: 0.0551,
        volume: 27182315,
      },
      '2023-11-17 16:00:00': {
        price: 369.85,
        change: 13.32,
        change_percent: 0.0374,
        volume: 40325371,
      },
      '2023-11-20 16:00:00': {
        price: 377.44,
        change: 20.91,
        change_percent: 0.0586,
        volume: 52528964,
      },
      '2023-11-21 16:00:00': {
        price: 373.07,
        change: 16.54,
        change_percent: 0.0464,
        volume: 28423145,
      },
      '2023-11-22 16:00:00': {
        price: 377.85,
        change: 21.32,
        change_percent: 0.0598,
        volume: 23361184,
      },
      '2023-11-24 13:05:00': {
        price: 377.43,
        change: 20.9,
        change_percent: 0.0586,
        volume: 10176649,
      },
      '2023-11-27 16:00:00': {
        price: 378.61,
        change: 22.08,
        change_percent: 0.0619,
        volume: 22179228,
      },
      '2023-11-28 16:00:00': {
        price: 382.7,
        change: 26.17,
        change_percent: 0.0734,
        volume: 20453112,
      },
      '2023-11-29 16:00:00': {
        price: 378.85,
        change: 22.32,
        change_percent: 0.0626,
        volume: 28963399,
      },
      '2023-11-30 16:00:00': {
        price: 378.91,
        change: 22.38,
        change_percent: 0.0628,
        volume: 30554415,
      },
      '2023-12-01 16:00:00': {
        price: 374.51,
        change: 17.98,
        change_percent: 0.0504,
        volume: 33040472,
      },
      '2023-12-04 16:00:00': {
        price: 369.14,
        change: 12.61,
        change_percent: 0.0354,
        volume: 32063305,
      },
      '2023-12-05 16:00:00': {
        price: 372.52,
        change: 15.99,
        change_percent: 0.0448,
        volume: 23065035,
      },
      '2023-12-06 16:00:00': {
        price: 368.8,
        change: 12.27,
        change_percent: 0.0344,
        volume: 21182072,
      },
      '2023-12-07 16:00:00': {
        price: 370.95,
        change: 14.42,
        change_percent: 0.0404,
        volume: 23118864,
      },
      '2023-12-08 16:00:00': {
        price: 374.23,
        change: 17.7,
        change_percent: 0.0496,
        volume: 20154366,
      },
      '2023-12-11 16:00:00': {
        price: 371.3,
        change: 14.77,
        change_percent: 0.0414,
        volume: 27708757,
      },
      '2023-12-12 16:00:00': {
        price: 374.38,
        change: 17.85,
        change_percent: 0.0501,
        volume: 24838253,
      },
      '2023-12-13 16:00:00': {
        price: 374.37,
        change: 17.84,
        change_percent: 0.05,
        volume: 30955531,
      },
      '2023-12-14 16:00:00': {
        price: 365.93,
        change: 9.4,
        change_percent: 0.0264,
        volume: 43277461,
      },
      '2023-12-15 16:00:00': {
        price: 370.73,
        change: 14.2,
        change_percent: 0.0398,
        volume: 78502324,
      },
      '2023-12-18 16:00:00': {
        price: 372.65,
        change: 16.12,
        change_percent: 0.0452,
        volume: 21802878,
      },
      '2023-12-19 16:00:00': {
        price: 373.26,
        change: 16.73,
        change_percent: 0.0469,
        volume: 20603658,
      },
      '2023-12-20 16:00:00': {
        price: 370.62,
        change: 14.09,
        change_percent: 0.0395,
        volume: 26316650,
      },
      '2023-12-21 16:00:00': {
        price: 373.54,
        change: 17.01,
        change_percent: 0.0477,
        volume: 17708006,
      },
      '2023-12-22 16:00:00': {
        price: 374.58,
        change: 18.05,
        change_percent: 0.0506,
        volume: 17107484,
      },
      '2023-12-26 16:00:00': {
        price: 374.66,
        change: 18.13,
        change_percent: 0.0509,
        volume: 12673050,
      },
      '2023-12-27 16:00:00': {
        price: 374.07,
        change: 17.54,
        change_percent: 0.0492,
        volume: 14905412,
      },
      '2023-12-28 16:00:00': {
        price: 375.28,
        change: 18.75,
        change_percent: 0.0526,
        volume: 14327013,
      },
      '2023-12-29 16:00:00': {
        price: 376.04,
        change: 19.51,
        change_percent: 0.0547,
        volume: 18730838,
      },
      '2024-01-02 16:00:00': {
        price: 370.87,
        change: 14.34,
        change_percent: 0.0402,
        volume: 25258633,
      },
      '2024-01-03 16:00:00': {
        price: 370.6,
        change: 14.07,
        change_percent: 0.0395,
        volume: 23083465,
      },
      '2024-01-04 16:00:00': {
        price: 367.94,
        change: 11.41,
        change_percent: 0.032,
        volume: 20901502,
      },
      '2024-01-05 16:00:00': {
        price: 367.75,
        change: 11.22,
        change_percent: 0.0315,
        volume: 21004575,
      },
      '2024-01-08 16:00:00': {
        price: 374.69,
        change: 18.16,
        change_percent: 0.0509,
        volume: 23133967,
      },
      '2024-01-09 16:00:00': {
        price: 375.79,
        change: 19.26,
        change_percent: 0.054,
        volume: 20829953,
      },
      '2024-01-10 16:00:00': {
        price: 382.77,
        change: 26.24,
        change_percent: 0.0736,
        volume: 25514245,
      },
      '2024-01-11 16:00:00': {
        price: 384.63,
        change: 28.1,
        change_percent: 0.0788,
        volume: 27850846,
      },
      '2024-01-12 16:00:00': {
        price: 388.47,
        change: 31.94,
        change_percent: 0.0896,
        volume: 21661153,
      },
      '2024-01-16 16:00:00': {
        price: 390.27,
        change: 33.74,
        change_percent: 0.0946,
        volume: 27202268,
      },
      '2024-01-17 16:00:00': {
        price: 389.47,
        change: 32.94,
        change_percent: 0.0924,
        volume: 22234108,
      },
      '2024-01-18 16:00:00': {
        price: 393.87,
        change: 37.34,
        change_percent: 0.1047,
        volume: 23392068,
      },
      '2024-01-19 16:00:00': {
        price: 398.67,
        change: 42.14,
        change_percent: 0.1182,
        volume: 29331136,
      },
      '2024-01-22 16:00:00': {
        price: 396.51,
        change: 39.98,
        change_percent: 0.1121,
        volume: 27016902,
      },
      '2024-01-23 16:00:00': {
        price: 398.9,
        change: 42.37,
        change_percent: 0.1188,
        volume: 20525882,
      },
      '2024-01-24 16:00:00': {
        price: 402.56,
        change: 46.03,
        change_percent: 0.1291,
        volume: 24866953,
      },
      '2024-01-25 16:00:00': {
        price: 404.87,
        change: 48.34,
        change_percent: 0.1356,
        volume: 21021155,
      },
      '2024-01-26 16:00:00': {
        price: 403.93,
        change: 47.4,
        change_percent: 0.1329,
        volume: 17803271,
      },
      '2024-01-29 16:00:00': {
        price: 409.72,
        change: 53.19,
        change_percent: 0.1492,
        volume: 24510236,
      },
      '2024-01-30 16:00:00': {
        price: 408.59,
        change: 52.06,
        change_percent: 0.146,
        volume: 33477610,
      },
      '2024-01-31 16:00:00': {
        price: 397.58,
        change: 41.05,
        change_percent: 0.1151,
        volume: 47871097,
      },
    },
  },
};
