import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../../assets/Colors';
import {widthToDp} from '../../utils/Responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SubscriptionTypeCard = ({isSelected, TeirName, TeirPrice, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {borderColor: isSelected ? Colors.primary : Colors.primaryMuted},
      ]}>
      <View>
        <Text style={styles.heading}>{TeirName} Teir</Text>
        <Text style={styles.headingBold}>${TeirPrice} / month</Text>
      </View>
      {isSelected ? (
        <View>
          <Ionicons
            name="checkmark-circle-sharp"
            size={24}
            color={Colors.primary}
          />
        </View>
      ) : (
        <View>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={Colors.primaryMuted}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SubscriptionTypeCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: widthToDp(3),
    borderWidth: 5,
    padding: widthToDp(3),
    flexDirection: 'row',

    borderRadius: widthToDp(3),
    justifyContent: 'space-between',
  },
  headingBold: {
    marginBottom: widthToDp(3),
    fontSize: widthToDp(5),
    fontWeight: 'bold',
    color: Colors.white,
  },
  heading: {
    marginBottom: widthToDp(3),
    fontSize: widthToDp(5),
    color: Colors.white,
  },
});
