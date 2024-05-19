import {StyleSheet, Text, View} from 'react-native';
import React, {Children, useCallback, useRef, useState} from 'react';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import PillButton from '../PillButton/PillButton';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {widthToDp} from '../../utils/Responsive';
import Colors from '../../../assets/Colors';
import {defaultStyles} from '../../../assets/Styles';

const CustomBottomSheet = ({snapPoints, children, bottomSheetRef}) => {
  const handleSheetChanges = useCallback(index => {}, []);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      keyboardBehavior="extend"
      onChange={handleSheetChanges}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      handleIndicatorStyle={{backgroundColor: '#fff', width: widthToDp(10)}}
      backgroundStyle={{backgroundColor: Colors.background}}>
      <BottomSheetView style={styles.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({});
