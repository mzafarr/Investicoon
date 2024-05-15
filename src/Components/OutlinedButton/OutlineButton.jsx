import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../../assets/Colors';
import {widthToDp} from '../../utils/Responsive';

const OutlineButton = ({buttonText}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.gray,
    borderWidth: widthToDp(0.5),
    borderRadius: widthToDp(3),
    flexDirection: 'row',
    padding: widthToDp(1.5),
    alignSelf: 'flex-start',
  },
  text: {
    color: Colors.white,
    padding: widthToDp(1),
  },
});
