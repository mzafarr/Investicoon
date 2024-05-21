import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {defaultStyles} from '../../../assets/Styles';
import Colors from '../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import {widthToDp} from '../../utils/Responsive';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import Toast from 'react-native-toast-message';
import useAuth from '../../CustomHooks/useAuth/useAuth';
import PillButton from '../../Components/PillButton/PillButton';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';

const ChangePasswordScreen = () => {
  const {changePassword} = useAuth();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const callChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Passwords do not match',
      });
    } else {
      setLoading(true);
      await changePassword(oldPassword, newPassword);
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          marginHorizontal: Platform.OS === 'ios' ? widthToDp(0) : widthToDp(3),
        }}>
        <HeaderBar />
        <View style={defaultStyles.container}>
          <Text style={[defaultStyles.header, {fontSize: widthToDp(10)}]}>
            Change Password!
          </Text>
          <Text style={defaultStyles.descriptionText}>
            Please enter a strong password container capital letters, numbers
            and special characters.
          </Text>
          <CustomTextInput
            placeholder="Old Password"
            placeholderTextColor={Colors.gray}
            value={oldPassword}
            secureTextEntry={true}
            onChangeText={setOldPassword}
          />
          <CustomTextInput
            placeholder="New Password"
            placeholderTextColor={Colors.gray}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={true}
          />
          <CustomTextInput
            placeholder="Confirm New Password"
            placeholderTextColor={Colors.gray}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />

          <View style={{flex: 1}} />

          <PillButton
            ButtonText="Change Password"
            email={oldPassword}
            fullName={newPassword}
            password={confirmPassword}
            onPress={() => callChangePassword()}
            loading={loading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: widthToDp(3),
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default ChangePasswordScreen;
