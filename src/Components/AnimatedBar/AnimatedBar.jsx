import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthToDp} from '../../utils/Responsive';

const AnimatedBar = () => {
  const options = ['1D', '5D', '1M', '6M', '1Y'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity
          key={option}
          onPress={() => handleOptionSelect(option)}
          style={[
            styles.option,
            {backgroundColor: option === selectedOption ? 'white' : 'black'},
          ]}>
          <Text
            style={{
              color: option === selectedOption ? 'black' : 'white',
            }}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingVertical: widthToDp(2.5),
    marginHorizontal: widthToDp(3),
    justifyContent: 'space-around',
    borderRadius: widthToDp(2.5),
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default AnimatedBar;
