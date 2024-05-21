import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {OneDayData} from '../../Redux/ReduxSlices/OneDaySlice';
import {LineChart} from 'react-native-gifted-charts';
import {widthToDp} from '../../utils/Responsive';
import Colors from '../../../assets/Colors';

const HomeRowTab = ({companyData, onPress, graphData}) => {
  const Data = useSelector(OneDayData);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{companyData.symbol}</Text>
          <Text style={styles.text}>{companyData.name}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.text}>{companyData.price}</Text>
          <Text
            style={[
              styles.textsmall,
              companyData.change > 0 ? {color: 'green'} : {color: 'red'},
            ]}>
            {companyData?.change}({companyData?.change_percent}%)
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    borderRadius: widthToDp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: widthToDp(3),
    padding: widthToDp(8),
  },
  title: {
    fontSize: widthToDp(4.5),
    fontWeight: 'bold',
    color: Colors.white,
  },

  text: {
    color: 'white',
    fontSize: widthToDp(4),
  },
  textsmall: {
    color: 'white',
    fontSize: widthToDp(3.2),
  },
  priceContainer: {
    alignItems: 'center',
  },
});

export default HomeRowTab;
{
  /* <View
          style={{
            marginLeft: widthToDp(-15),
            paddingRight: widthToDp(2),
          }}>
          <LineChart
            areaChart
            data={graphData}
            yAxisOffset={graphData[0].value - 20}
            width={widthToDp(20)}
            height={widthToDp(20)}
            hideDataPoints
            spacing={5}
            color="#00ff83"
            thickness={2}
            startFillColor="rgba(20,105,81,0.3)"
            endFillColor="rgba(20,85,81,0.01)"
            startOpacity={0.9}
            endOpacity={0.2}
            yAxisThickness={0}
            rulesColor="transparent"
            yAxisTextStyle={{color: 'transparent'}}
            xAxisColor="lightgray"
          />
        </View> */
}
