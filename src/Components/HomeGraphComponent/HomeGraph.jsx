import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {OneDayData} from '../../Redux/ReduxSlices/OneDaySlice';
import {LineChart} from 'react-native-gifted-charts';
import {widthToDp} from '../../utils/Responsive';
import Colors from '../../../assets/Colors';

const HomeGraph = ({companyData, onPress, graphData}) => {
  const Data = useSelector(OneDayData);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.ComapnyFlex}>
          <Text style={styles.title}>{companyData.name}</Text>
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
        <View
          style={{
            width: widthToDp(100),
            paddingBottom: widthToDp(10),
          }}>
          <LineChart
            areaChart
            data={graphData}
            rotateLabel
            yAxisOffset={graphData[0].value - 20}
            hideDataPoints
            spacing={15}
            color="#00ff83"
            thickness={2}
            startFillColor="rgba(20,105,81,0.3)"
            endFillColor="rgba(20,85,81,0.01)"
            startOpacity={0.9}
            endOpacity={0.2}
            noOfSections={6}
            yAxisThickness={0}
            showXAxisIndices={false}
            xAxisIndicesColor="lightgray"
            rulesColor="transparent"
            yAxisTextStyle={{color: 'transparent'}}
            xAxisColor="lightgray"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    borderRadius: widthToDp(3),
  },
  title: {
    fontSize: widthToDp(7),
    fontWeight: 'bold',
    marginBottom: widthToDp(5),
    color: Colors.white,
  },
  ComapnyFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(5),
    paddingTop: widthToDp(5),
  },
  text: {
    color: 'white',
    fontSize: widthToDp(5),
  },
  textsmall: {
    color: 'white',
    fontSize: widthToDp(3.5),
  },
  priceContainer: {
    alignItems: 'center',
  },
});

export default HomeGraph;
// pointerConfig={{
//   pointerStripHeight: 100,
//   pointerStripColor: 'lightgray',
//   pointerStripWidth: 2,
//   pointerStripHeight: 140,
//   pointerColor: 'lightgray',
//   radius: 6,
//   pointerLabelWidth: 100,
//   pointerLabelHeight: 80,
//   activatePointersOnLongPress: true,
//   autoAdjustPointerLabelPosition: false,
// }}
// pointerLabelComponent: items => {
//             return (
//               console.log(Math.round(parseFloat(items[0].value) * 100) / 10),
//               (
//                 <View
//                   style={{
//                     height: 90,
//                     width: 100,
//                     justifyContent: 'center',
//                     marginTop: -30,
//                     marginLeft: -40,
//                   }}>
//                   {/* <Text
//                   style={{
//                     color: 'white',
//                     fontSize: 14,
//                     marginBottom: 6,
//                     textAlign: 'center',
//                   }}>
//                   {items[0].date}
//                 </Text> */}

//                   <View
//                     style={{
//                       paddingHorizontal: 14,
//                       paddingVertical: 6,
//                       borderRadius: 16,
//                       backgroundColor: 'white',
//                     }}>
//                     <Text
//                       style={{
//                         fontWeight: 'bold',
//                         textAlign: 'center',
//                         color: 'black',
//                       }}>
//                       {'$' +
//                         Math.round(parseFloat(items[0].value) * 100) / 10}
//                     </Text>
//                   </View>
//                 </View>
//               )
//             );
//           },
