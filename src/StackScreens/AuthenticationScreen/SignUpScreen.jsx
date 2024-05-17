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

const SignUpScreen = () => {
  const {sendOtp} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const checkEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(email));
    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Email',
      });
    } else {
      setLoading(true);
      await onSignup();
      setLoading(false);
    }
  };
  const onSignup = async () => {
    const {success, data} = await sendOtp(email);
    console.log('data', data);
    if (success) {
      navigation.navigate('OtpScreen', {
        email: email,
        password: password,
        fullName: fullName,
      });
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={defaultStyles.container}>
          <Text style={defaultStyles.header}>Let's get started!</Text>
          <Text style={defaultStyles.descriptionText}>
            Enter your email address. We will send you a confirmation code there
          </Text>
          <CustomTextInput
            placeholder="Full Name"
            placeholderTextColor={Colors.gray}
            value={fullName}
            onChangeText={setFullName}
          />
          <CustomTextInput
            placeholder="Email Address"
            placeholderTextColor={Colors.gray}
            value={email}
            onChangeText={setEmail}
          />
          <CustomTextInput
            placeholder="Password"
            placeholderTextColor={Colors.gray}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={defaultStyles.textLink}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>

          <View style={{flex: 1}} />

          <PillButton
            ButtonText="Sign up"
            email={email}
            fullName={fullName}
            password={password}
            onPress={() => checkEmail()}
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

export default SignUpScreen;
