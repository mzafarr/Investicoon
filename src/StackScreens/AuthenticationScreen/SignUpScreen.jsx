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
} from 'react-native';
import {defaultStyles} from '../../../assets/Styles';
import Colors from '../../../assets/Colors';
// import {Link} from '@react-navigation/native';

const SignUpScreen = () => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0;

  const onSignup = async () => {
    console.log('email', email);
  };
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={defaultStyles.container}>
          <Text style={defaultStyles.header}>Let's get started!</Text>
          <Text style={defaultStyles.descriptionText}>
            Enter your email address. We will send you a confirmation code there
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

          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>

          <View style={{flex: 1}} />

          <TouchableOpacity
            style={[
              defaultStyles.pillButton,
              email !== '' ? styles.enabled : styles.disabled,
              {marginBottom: 20},
            ]}
            onPress={onSignup}>
            <Text style={defaultStyles.buttonText}>Sign up</Text>
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

export default SignUpScreen;
