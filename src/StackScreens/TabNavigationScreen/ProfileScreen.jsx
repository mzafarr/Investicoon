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
// import {BlurView} from '@react-native-community/blur';
import {heightToDp, widthToDp} from '../../utils/Responsive';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import {defaultStyles} from '../../../assets/Styles';
import PillButton from '../../Components/PillButton/PillButton';
import CustomBottomSheet from '../../Components/CustomBottomSheet/CustomBottomSheet';
import ConfirmationModal from '../../Components/ConfirmationModal/ConfirmationModal';
import useAuth from '../../CustomHooks/useAuth/useAuth';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state?.userData?.data);
  // console.log(user);
  const {logout, deleteAccount, suggestFeature} = useAuth();
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
  const confirmationSnapPoints = useMemo(() => ['30%', '30%'], []);
  const callDeleteApi = async () => {
    setLoading(true);
    await deleteAccount();
    setLoading(false);
  };
  // const callSuggestFeature = async () => {
  //   setLoading(true);
  //   await suggestFeature(title, description);
  //   setLoading(false);
  //   handleClosePress();
  // };
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      {/* <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={32}
        reducedTransparencyFallbackColor="white"
      /> */}
      <View style={{alignItems: 'center', paddingTop: heightToDp(10)}}>
        <View style={{flexDirection: 'row', gap: 6}}>
          <View style={styles.editRow}>
            <Text style={{fontSize: 26, color: '#fff'}}>{user?.name}</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ChangePasswordScreen')}>
          <Ionicons name="key-sharp" size={24} color={'#fff'} />
          <Text style={{color: '#fff', fontSize: 18}}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('FeatureScreen')}>
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
        PositiveOnPress={() => callDeleteApi()}
        PositiveLoading={loading}
      />
    </SafeAreaView>
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
