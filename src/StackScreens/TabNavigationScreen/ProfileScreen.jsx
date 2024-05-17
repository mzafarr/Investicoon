import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../assets/Colors';
import {BlurView} from '@react-native-community/blur';
import {heightToDp, widthToDp} from '../../utils/Responsive';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import {defaultStyles} from '../../../assets/Styles';
import PillButton from '../../Components/PillButton/PillButton';
import CustomBottomSheet from '../../Components/CustomBottomSheet/CustomBottomSheet';
import ConfirmationModal from '../../Components/ConfirmationModal/ConfirmationModal';
import useAuth from '../../CustomHooks/useAuth/useAuth';

const ProfileScreen = () => {
  const {logout} = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const bottomSheetRef = useRef(null);
  const confirmationSheetRef = useRef(null);
  const deletionSheetRef = useRef(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const handleClosePress = () => bottomSheetRef.current.close();
  const handleConfirmationOpen = useCallback(() => {
    confirmationSheetRef.current?.present();
  }, []);
  const handleConfirmationClose = () => confirmationSheetRef.current.close();
  const handleDeletionOpen = useCallback(() => {
    deletionSheetRef.current?.present();
  });
  const handleDeletionClose = () => deletionSheetRef.current.close();
  const snapPoints = useMemo(() => ['50%', '90%'], []);
  const confirmationSnapPoints = useMemo(() => ['30%', '30%'], []);
  useEffect(() => {}, []);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{flex: 1}}>
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={32}
          reducedTransparencyFallbackColor="white"
        />
        <View style={{alignItems: 'center', paddingTop: heightToDp(10)}}>
          <View style={{flexDirection: 'row', gap: 6}}>
            <View style={styles.editRow}>
              <Text style={{fontSize: 26, color: '#fff'}}>John Doe</Text>
            </View>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="person" size={24} color={'#fff'} />
            <Text style={{color: '#fff', fontSize: 18}}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={handlePresentModalPress}>
            <Ionicons name="bulb" size={24} color={'#fff'} />
            <Text style={{color: '#fff', fontSize: 18}}>Suggest a feature</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={handleDeletionOpen}>
            <Ionicons name="close-circle-outline" size={24} color={'#fff'} />
            <Text style={{color: '#fff', fontSize: 18}}>Delete Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleConfirmationOpen}>
            <Ionicons name="log-out" size={24} color={'#fff'} />
            <Text style={{color: '#fff', fontSize: 18}}>Log out</Text>
          </TouchableOpacity>
        </View>

        <CustomBottomSheet
          snapPoints={snapPoints}
          bottomSheetRef={bottomSheetRef}
          setBottomSheetVisible={setBottomSheetVisible}
          bottomSheetVisible={bottomSheetVisible}>
          <View style={{alignSelf: 'center'}}>
            <Text style={[defaultStyles.sectionHeader, {color: '#fff'}]}>
              Suggest A Feature
            </Text>
            <CustomTextInput
              placeholder="Title"
              placeholderTextColor={Colors.gray}
              value={title}
              onChangeText={setTitle}
            />
            <CustomTextInput
              placeholder="Description"
              placeholderTextColor={Colors.gray}
              value={description}
              onChangeText={setDescription}
              multiline={true}
              height={150}
            />
            <View
              style={{
                width: widthToDp(80),
                alignSelf: 'center',
                marginTop: widthToDp(5),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <PillButton
                ButtonText="Cancel"
                email={true}
                password={true}
                onPress={() => handleClosePress()}
                TouchStyles={{
                  width: widthToDp(30),
                  backgroundColor: Colors.red,
                }}
              />
              <PillButton
                ButtonText="Submit"
                email={title}
                password={description}
                onPress={() => handleClosePress()}
                loading={loading}
                TouchStyles={{width: widthToDp(30)}}
              />
            </View>
          </View>
        </CustomBottomSheet>

        <ConfirmationModal
          snapPoints={confirmationSnapPoints}
          bottomSheetRef={confirmationSheetRef}
          title={'Do you want to logout?'}
          NegativeButtonText={'Cancel'}
          NegativeOnPress={() => handleConfirmationClose()}
          PositiveButtonText={'Logout'}
          PositiveOnPress={() => logout()}
        />
        <ConfirmationModal
          snapPoints={confirmationSnapPoints}
          bottomSheetRef={deletionSheetRef}
          title={'Do you want to delete your account?'}
          NegativeButtonText={'Cancel'}
          NegativeOnPress={() => handleDeletionClose()}
          PositiveButtonText={'Delete'}
          PositiveOnPress={() => logout()}
        />
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  editRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
  },
  captureBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    width: 140,
    height: 44,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  actions: {
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
    borderRadius: 16,
    gap: 0,
    margin: 20,
  },
  btn: {
    padding: 14,
    flexDirection: 'row',
    gap: 20,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ProfileScreen;
{
  /* <BottomSheet
        ref={bottomSheetRef}
        keyboardBehavior="extend"
        onChange={handleSheetChanges}
        index={bottomSheetVisible ? 1 : -1}
        snapPoints={['80%', '90%']}
        handleIndicatorStyle={{backgroundColor: '#fff', width: widthToDp(10)}}
        backgroundStyle={{backgroundColor: Colors.background}}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={[defaultStyles.sectionHeader, {color: '#fff'}]}>
            Suggest A Feature
          </Text>
          <CustomTextInput
            placeholder="Title"
            placeholderTextColor={Colors.gray}
            value={title}
            onChangeText={setTitle}
          />
          <CustomTextInput
            placeholder="Description"
            placeholderTextColor={Colors.gray}
            value={description}
            onChangeText={setDescription}
            multiline={true}
            height={150}
          />
          <View style={{width: widthToDp(40), marginTop: widthToDp(5)}}>
            <PillButton
              ButtonText="Submit"
              email={title}
              password={description}
              onPress={() => handleClosePress()}
              loading={loading}
            />
          </View>
        </BottomSheetView>
      </BottomSheet> */
}
