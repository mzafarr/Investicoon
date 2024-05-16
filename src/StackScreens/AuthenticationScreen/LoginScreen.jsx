import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Colors from '../../../assets/Colors';
import {defaultStyles} from '../../../assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import {widthToDp} from '../../utils/Responsive';
import PillButton from '../../Components/PillButton/PillButton';
import Toast from 'react-native-toast-message';
import useAuth from '../../CustomHooks/useAuth/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInType = {
  Phone: 0,
  Email: 1,
  Google: 2,
  Apple: 3,
};

const LoginScreen = () => {
  const {login} = useAuth();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
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
      await onSignIn();
      setLoading(false);
    }
  };
  const onSignIn = async () => {
    const {success, data} = await login(email, password);
    if (success) {
      console.log('data', data?.access_token);
      await AsyncStorage.setItem('access_token', data?.access_token);
      navigation.navigate('Tabs');
    }
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={defaultStyles.container}>
      <ScrollView>
        <View style={defaultStyles.container}>
          <Text style={defaultStyles.header}>Welcome back</Text>
          <Text style={defaultStyles.descriptionText}>
            Enter the email address associated with your account
          </Text>
          <View style={{marginVertical: widthToDp(5)}}>
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
          </View>
          <PillButton
            ButtonText="Login"
            email={email}
            password={password}
            onPress={() => checkEmail()}
            loading={loading}
          />

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
            <View
              style={{
                flex: 1,
                height: StyleSheet.hairlineWidth,
                backgroundColor: Colors.gray,
              }}
            />
            <Text style={{color: Colors.gray, fontSize: 20}}>or</Text>
            <View
              style={{
                flex: 1,
                height: StyleSheet.hairlineWidth,
                backgroundColor: Colors.gray,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Google)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: 'row',
                gap: 16,
                marginTop: 20,
              },
            ]}>
            <Icon name="google" size={24} color={'#ffff'} />
            <Text style={[defaultStyles.buttonText, {color: '#ffff'}]}>
              Continue with Google{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Apple)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: 'row',
                gap: 16,
                marginTop: 20,
              },
            ]}>
            <Icon name="apple" size={24} color={'#fff'} />
            <Text style={[defaultStyles.buttonText, {color: '#fff'}]}>
              Continue with Apple{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
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

export default LoginScreen;
