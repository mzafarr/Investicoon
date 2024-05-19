import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../assets/Colors';
import {widthToDp} from '../../utils/Responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  multiline,
  height,
}) => {
  const [secureText, setSecureText] = useState(secureTextEntry);

  const showHidePassword = () => {
    setSecureText(!secureText);
  };
  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === 'ios'
          ? {padding: widthToDp(5), marginRight: widthToDp(2)}
          : {padding: widthToDp(3)},
      ]}>
      <TextInput
        style={[styles.input]}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        value={value}
        autoCapitalize="none"
        onChangeText={onChangeText}
        secureTextEntry={secureText}
        multiline={multiline}
        maxHeight={widthToDp(30)}
      />
      {secureTextEntry &&
        (secureText ? (
          <TouchableOpacity onPress={showHidePassword}>
            <Ionicons name="eye" size={24} color={'#000'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={showHidePassword}>
            <Ionicons name="eye-off" size={24} color={'#000'} />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: widthToDp(3),
    backgroundColor: Colors.lightGray,
    borderRadius: widthToDp(4),
    //
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: widthToDp(70),
    backgroundColor: Colors.lightGray,
    fontSize: widthToDp(5),
    maxHeight: widthToDp(150),
  },
});
