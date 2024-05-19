import {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Colors from '../../../assets/Colors';
import {defaultStyles} from '../../../assets/Styles';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import useAuth from '../../CustomHooks/useAuth/useAuth';
const CELL_COUNT = 6;

const OtpScreen = ({route}) => {
  const {signup} = useAuth();

  const {email, password, fullName} = route.params;
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const ref = useBlurOnFulfill({value: code, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  const onSignUp = async () => {
    Toast.show({
      type: 'success',
      text1: 'Loading',
    });
    await signup(fullName, email, password, code);
  };
  useEffect(() => {
    if (code.length === 6) {
      onSignUp();
    }
  }, [code]);

  const verifyCode = async () => {
    console.log('email', code);
  };

  const verifySignIn = async () => {
    console.log('email', code);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>6-digit code</Text>
        <Text style={defaultStyles.descriptionText}>
          Code sent to phone unless you already have an account
        </Text>

        <CodeField
          ref={ref}
          {...props}
          value={code}
          onChangeText={setCode}
          cellCount={CELL_COUNT}
          // autoFocus={true}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Fragment key={index}>
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
              {index === 2 ? (
                <View key={`separator-${index}`} style={styles.separator} />
              ) : null}
            </Fragment>
          )}
        />

        {/* <TouchableOpacity>
          <Text style={[defaultStyles.textLink]}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 12,
  },
  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    paddingBottom: 8,
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: Colors.gray,
    alignSelf: 'center',
  },
});
export default OtpScreen;
