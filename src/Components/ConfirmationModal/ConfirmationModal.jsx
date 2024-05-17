import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomBottomSheet from '../CustomBottomSheet/CustomBottomSheet';
import PillButton from '../PillButton/PillButton';
import {defaultStyles} from '../../../assets/Styles';
import Colors from '../../../assets/Colors';
import {widthToDp} from '../../utils/Responsive';

const ConfirmationModal = ({
  title,
  snapPoints,
  bottomSheetRef,
  NegativeButtonText,
  NegativeOnPress,
  PositiveButtonText,
  PositiveOnPress,
}) => {
  return (
    <CustomBottomSheet snapPoints={snapPoints} bottomSheetRef={bottomSheetRef}>
      <View style={{alignSelf: 'center'}}>
        <Text style={[defaultStyles.sectionHeader, {color: '#fff'}]}>
          {title}
        </Text>

        <View
          style={{
            width: widthToDp(80),
            alignSelf: 'center',
            marginTop: widthToDp(5),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <PillButton
            ButtonText={NegativeButtonText}
            email={true}
            password={true}
            onPress={NegativeOnPress}
            TouchStyles={{
              width: widthToDp(30),
              backgroundColor: Colors.red,
            }}
          />
          <PillButton
            ButtonText={PositiveButtonText}
            email={true}
            password={true}
            onPress={PositiveOnPress}
            TouchStyles={{width: widthToDp(30)}}
          />
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({});
