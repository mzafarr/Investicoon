import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthToDp} from '../../utils/Responsive';
import Colors from '../../../assets/Colors';

const BulletPointText = ({text}) => {
  return (
    <View style={{marginBottom: widthToDp(1)}}>
      <Text style={styles.bulletPoint}>
        {'\u2022'} <Text style={styles.bulletText}>{text}</Text>
      </Text>
    </View>
  );
};

export default BulletPointText;

const styles = StyleSheet.create({
  bulletPoint: {
    fontSize: widthToDp(7),
    color: Colors.white,
  },
  bulletText: {
    fontSize: widthToDp(5.5),
    marginBottom: widthToDp(3),
  },
});
