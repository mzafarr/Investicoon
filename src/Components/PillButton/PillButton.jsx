import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {defaultStyles} from '../../../assets/Styles';
import Colors from '../../../assets/Colors';
import {widthToDp} from '../../utils/Responsive';

const PillButton = ({
  email,
  fullName,
  password,
  onPress,
  ButtonText,
  loading,
  TouchStyles,
}) => {
  const checkEmail = email && true;
  const checkName = fullName === undefined ? true : fullName && true;
  const checkPass = password && true;
  return (
    <TouchableOpacity
      style={[
        defaultStyles.pillButton,
        checkEmail && checkName && checkPass ? styles.enabled : styles.disabled,
        TouchStyles,
      ]}
      disabled={checkEmail && checkName && checkPass && !loading ? false : true}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text style={defaultStyles.buttonText}>{ButtonText}</Text>
      )}
    </TouchableOpacity>
  );
};

export default PillButton;

const styles = StyleSheet.create({
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
