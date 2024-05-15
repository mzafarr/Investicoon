import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../../assets/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthToDp} from '../../utils/Responsive';
import {useNavigation} from '@react-navigation/native';

const HeaderBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name={'chevron-back-outline'}
          size={widthToDp(8)}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: widthToDp(2),
  },
});
