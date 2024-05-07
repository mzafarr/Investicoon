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
} from 'react-native';
import Colors from '../../../assets/Colors';
import {defaultStyles} from '../../../assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const SignInType = {
  Phone: 0,
  Email: 1,
  Google: 2,
  Apple: 3,
};

const LoginScreen = () => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const navigation = useNavigation();
  const onSignIn = async () => {
    navigation.navigate('OtpScreen');
    console.log('email', email);
  };
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={defaultStyles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={defaultStyles.container}>
          <Text style={defaultStyles.header}>Welcome back</Text>
          <Text style={defaultStyles.descriptionText}>
            Enter the email address associated with your account
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, {flex: 1}]}
              placeholder="Email Address"
              placeholderTextColor={Colors.gray}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <TouchableOpacity
            style={[
              defaultStyles.pillButton,
              email !== '' ? styles.enabled : styles.disabled,
              {marginBottom: 20},
            ]}
            onPress={() => onSignIn(SignInType.Phone)}>
            <Text style={defaultStyles.buttonText}>Continue</Text>
          </TouchableOpacity>

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
      </KeyboardAvoidingView>
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
