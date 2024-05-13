import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {OneDayData} from '../../Redux/ReduxSlices/OneDaySlice';
import {LineChart} from 'react-native-gifted-charts';

const HomeGraph = () => {
  const Data = useSelector(OneDayData);

  return (
    <View></View>
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
    // </View>
  );
};

const styles = StyleSheet.create({});

export default HomeGraph;
