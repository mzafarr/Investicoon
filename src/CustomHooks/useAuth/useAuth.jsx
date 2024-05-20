import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CommonActions,
  StackActions,
  useNavigation,
  NavigationActions,
} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import AsyncStorageFunction from '../../utils/AsyncStorageFunction';
import {useDispatch, useSelector} from 'react-redux';
import {saveUserData} from '../../Redux/ReduxSlices/UserDataSlice';
import axios from 'axios';

const API_LINK = 'https://temporary-weld.vercel.app';
const tokenName = 'access_token';
const useAuth = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {AsyncSetItem, AsyncGetItem, AsyncRemoveItem} = AsyncStorageFunction();
  const getUserData = async token => {
    console.log('Am I running', token);
    if (token) {
      const response = await fetch(
        `${API_LINK}/api/user?accessToken=${token}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      console.log('GetingUserData:', data);
      if (data?.status === 200) {
        dispatch(saveUserData(data?.user));
      } else if (data?.status !== 200) {
        Toast.show({
          type: 'error',
          text1: 'Something went wrong',
        });
      }
      return data;
    }
  };
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_LINK}/api/signin/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (data?.status === 200) {
        if (data?.access_token) {
          await AsyncSetItem(tokenName, data?.access_token);
          Toast.show({
            type: 'success',
            text1: 'Login successful',
          });
          await getUserData(data?.access_token);
          navigation.navigate('Tabs');
        }
      } else if (data?.status === 400) {
        Toast.show({
          type: 'error',
          text1: 'Invalid credentials',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'An error occurred. Please try again later.',
      };
    }
  };
  const signup = async (name, email, password, code) => {
    const numberCode = parseInt(code, 10);
    console.log(
      'signup',
      typeof name,
      typeof email,
      typeof password,
      typeof numberCode,
    );
    console.log('signup', name, email, password, numberCode);
    try {
      const response = await axios.post(`${API_LINK}/api/signup/`, {
        name: name,
        email: email,
        password: password,
        otp: numberCode,
      });

      const data = response?.data;

      console.log('Parsed data:', data);
      if (response.status === 200) {
        console.log('Signup successful:', data);
        await getUserData(data?.access_token);
        await AsyncSetItem(tokenName, data?.access_token);
        Toast.show({
          type: 'success',
          text1: 'Account created successfully',
        });
        navigation.reset({
          index: 0,
          routes: [{name: 'Tabs'}],
        });
      } else if (response.status === 400) {
        Toast.show({
          type: 'error',
          text1: 'An error occurred',
        });
      } else {
        console.log('Signup error here:', data);
      }
    } catch (error) {
      console.error('Signup error:', error);
      Toast.show({
        type: 'error',
        text1: 'An error occurred. Please try again later.',
      });
    }
  };
  const sendOtp = async (fullName, email, password) => {
    console.log('sendOtp', fullName, email, password);
    try {
      const response = await fetch(`${API_LINK}/api/otp/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const data = await response.json();
      if (data.status === 200) {
        console.log('OTP successful:', data);
        navigation.navigate('OtpScreen', {
          email: email,
          password: password,
          fullName: fullName,
        });
      } else if (data.status !== 200) {
        Toast.show({
          type: 'error',
          text1: 'An error occurred. Please try again later.',
        });
      } else {
        console.log('OTP error here:', data);
      }
    } catch (error) {
      console.error('OTP error:', error);
    }
  };
  const logout = async () => {
    await AsyncRemoveItem(tokenName);
    Toast.show({
      type: 'success',
      text1: 'Logout successful',
    });
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  };
  const deleteAccount = async () => {
    try {
      const token = await AsyncGetItem(tokenName);
      const response = await fetch(
        `${API_LINK}/api/user?accessToken=${token}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      if (data?.status === 200) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'OnboardingScreen'}],
          }),
        );
        Toast.show({
          type: 'success',
          text1: 'Account Deleted',
          text2: 'Sad to see you go :(',
        });
      } else {
        return {success: false, error: data.message};
      }
    } catch (error) {}
  };
  const changePassword = async (oldPassword, newPassword) => {
    const token = await AsyncGetItem(tokenName);

    try {
      const response = await fetch(`${API_LINK}/api/change-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessToken: token,
          oldPassword: oldPassword,
          newPassword: newPassword,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data?.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Password changed successfully',
        });
        navigation.goBack();
      } else if (data?.status === 400) {
        Toast.show({
          type: 'error',
          text1: 'Old password is incorrect',
        });
      } else {
        return {success: false, error: data.message};
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };
  const suggestFeature = async (userEmail, title, description) => {
    try {
      console.log('suggestFeature', userEmail, title, description);
      const response = await fetch(`${API_LINK}/api/feature-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          title: title,
          description: description,
        }),
      });
      const data = await response.json();

      if (data?.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Request submitted successfully',
        });
        navigation.goBack();
      } else if (data?.status !== 200) {
        Toast.show({
          type: 'error',
          text1: 'Something went wrong',
        });
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };
  return {
    login,
    getUserData,
    signup,
    sendOtp,
    logout,
    deleteAccount,
    suggestFeature,
    changePassword,
  };
};

export default useAuth;
